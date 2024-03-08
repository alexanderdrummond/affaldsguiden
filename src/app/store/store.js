import { create } from "zustand";

const useStore = create((set, get) => ({
  // State med liste af stationer.
  stations: [],

  // Funktion der fetcher stationer kun når listen er tom.
  fetchStations: async () => {
    if (get().stations.length > 0) {
      return;
    }
    try {
      const stationResponse = await fetch(
        "http://localhost:3000/orgs?attributes=id,name,address,zipcode,city"
      );
      const stations = await stationResponse.json();
      set({ stations });
      // Fetcher reviews fra hver station + merger til ét objekt
      const reviewPromises = stations.map((station) =>
        fetch(`http://localhost:3000/reviews/${station.id}`)
          .then((res) => res.json())
          .then((reviews) => ({ [station.id]: reviews }))
      );
      const reviewsArray = await Promise.all(reviewPromises);
      const reviews = reviewsArray.reduce(
        (acc, review) => ({ ...acc, ...review }),
        {}
      );
      set((state) => ({ ...state, reviews }));
    } catch (error) {
      console.error("fetch error:", error);
    }
  },

  // State der storer reviews på stationernes ID

  reviews: {},

  // Fetcher reviews på stationer baseret på ID
  fetchReviews: async (stationId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/reviews/${stationId}`
      );
      const data = await response.json();
      set((state) => ({
        reviews: { ...state.reviews, [stationId]: data },
      }));
    } catch (error) {
      console.error("review fetch error:", error);
    }
  },

  // Fetcher detaljer for en station hvis det ikke allerede er er i staten
  fetchStationDetail: async (stationId) => {
    let currentStations = get().stations;
    if (!currentStations.some((station) => station.id === stationId)) {
      try {
        const response = await fetch(`http://localhost:3000/orgs/${stationId}`);
        const newStationData = await response.json();
        set({ stations: [...currentStations, newStationData] });
      } catch (error) {
        console.error("error fetching station detail:", error);
      }
    }
  },

  // Tilføjer review til store

  addReview: async (newReview) => {
    set((state) => ({
      reviews: {
        ...state.reviews,
        [newReview.org_id]: [
          ...(state.reviews[newReview.org_id] || []),
          newReview,
        ],
      },
    }));
  },

  // Sletter review på ID

  deleteReview: async (reviewId) => {
    try {
      const requestOptions = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      await fetch(`http://localhost:3000/reviews/${reviewId}`, requestOptions);
      // Her slettes review from store så UI opdaterer
      set((state) => {
        const updatedReviews = { ...state.reviews };
        Object.keys(updatedReviews).forEach((orgId) => {
          updatedReviews[orgId] = updatedReviews[orgId].filter(
            (review) => review.id !== reviewId
          );
        });

        return { ...state, reviews: updatedReviews };
      });
    } catch (error) {
      console.error("delete review error:", error);
    }
  },

  // Array af sektioner i affaldssortering

  sortingSections: [],

  // Fetcher sorterings sektioner

  fetchSortingSections: async () => {
    try {
      const response = await fetch("http://localhost:3000/section");
      const sections = await response.json();
      set({ sortingSections: sections });
    } catch (error) {
      console.error("error fetching sorting sections:", error);
    }
  },

  // Objekt der storer details af hver sektion baseret på ID

  sectionDetails: {},

  // Fetcher details af sektion fra ID

  fetchSectionDetail: async (sectionId) => {
    if (!get().sectionDetails[sectionId]) {
      try {
        const response = await fetch(
          `http://localhost:3000/section/${sectionId}`
        );
        const details = await response.json();
        set((state) => ({
          sectionDetails: { ...state.sectionDetails, [sectionId]: details },
        }));
      } catch (error) {
        console.error("error fetching section detail:", error);
      }
    }
  },
  // Storer details på kategorier på ID

  categoryDetails: {},

  // Fetcher details fra kategorier på ID

  fetchCategoryDetails: async (categoryId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/category/details/${categoryId}`
      );
      const details = await response.json();
      set((state) => ({
        categoryDetails: { ...state.categoryDetails, [categoryId]: details },
      }));
    } catch (error) {
      console.error("error fetching category details:", error);
    }
  },

  // State der håndterer detaljer for nye ordre

  orderDetails: null,

  // Fetcher details på en specifik ordre på orderId (converted fra newId fra response)
  fetchOrderDetails: async (orderId) => {
    try {
      const response = await fetch(`http://localhost:3000/orders/${orderId}`);
      const orderDetails = await response.json();
      set({ orderDetails });
    } catch (error) {
      console.error("error fetching order details:", error);
    }
  },
}));

export default useStore;
