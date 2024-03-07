import { create } from "zustand";

const useStore = create((set, get) => ({
  stations: [],
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
  reviews: {},
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

  // Sorting:
  // mere info her

  sortingSections: [],
  fetchSortingSections: async () => {
    try {
      const response = await fetch("http://localhost:3000/section");
      const sections = await response.json();
      set({ sortingSections: sections });
    } catch (error) {
      console.error("error fetching sorting sections:", error);
    }
  },

  sectionDetails: {},
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

  categoryDetails: {},
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
}));

export default useStore;
