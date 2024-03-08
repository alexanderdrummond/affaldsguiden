import { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useNotification } from "@/app/context/NotificationContext";
import Confirmation from "./Confirmation";
import useStore from "@/app/store/store";

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [selectedContainerId, setSelectedContainerId] = useState(null);
  const [containers, setContainers] = useState([]);
  const { showNotification } = useNotification();
  const [orderResponse, setOrderResponse] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/containers")
      .then((response) => response.json())
      .then((data) => setContainers(data))
      .catch((error) => console.error("fetch error:", error));
  }, []);

  // Sikrer at en beholder bliver valgt før man går videre.

  const handleContinue = () => {
    if (!selectedContainerId) {
      showNotification("error", "Vælg en container før du fortsætter");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (orderData) => {
    // Regex patterns til validering
    const zipcodePattern = /^\d{4}$/;
    const phonePattern = /^\d{8}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMessage = "";
    if (!zipcodePattern.test(orderData.zipcode)) {
      errorMessage += "Postnummer skal være 4 cifre. ";
    }
    if (!phonePattern.test(orderData.phone)) {
      errorMessage += "Telefon skal være 8 cifre. ";
    }
    if (!emailPattern.test(orderData.email)) {
      errorMessage += "Ugyldig e-mail adresse. ";
    }

    if (errorMessage.length > 0) {
      showNotification("error", errorMessage);
      return;
    }

    // Når data er valid, send API call
    const urlencoded = new URLSearchParams();
    urlencoded.append("fullname", orderData.fullname);
    urlencoded.append("address", orderData.address);
    urlencoded.append("zipcode", orderData.zipcode);
    urlencoded.append("city", orderData.city);
    urlencoded.append("email", orderData.email);
    urlencoded.append("phone", orderData.phone);
    urlencoded.append("container_id", selectedContainerId.toString());

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/orders",
        requestOptions
      );

      if (response.ok) {
        const result = await response.json();
        const orderId = result.newId;

        useStore.getState().fetchOrderDetails(orderId);

        setStep(3);
        showNotification("success", "Bestilling oprettet succesfuldt");
      } else {
        console.error("failed to create", response.status, response.statusText);
        showNotification("error", "Fejl ved oprettelse af bestilling");
      }
    } catch (error) {
      console.error("Network error", error);
      showNotification("error", "Netværksfejl ved indsendelse af bestilling");
    }
  };

  // Henter order details fra newId fra response og sender videre til confirmation step.

  const orderDetails = useStore((state) => state.orderDetails);

  return (
    <div className="mx-4 flex flex-col items-center my-28">
      <div className="w-full max-w-4xl bg-[#F6F6F6] rounded-lg overflow-hidden shadow-xl">
        <div className="flex-column md:flex">
          <div className="w-full md:w-1/3 bg-[#114D46] p-4 "></div>
          <div className="w-full md:w-2/3 p-8">
            {step === 1 ? (
              <StepOne
                containers={containers}
                onContinue={handleContinue}
                onContainerSelect={setSelectedContainerId}
                selectedContainerId={selectedContainerId}
              />
            ) : step === 2 ? (
              <StepTwo onSubmit={handleSubmit} errors={formErrors} />
            ) : (
              <Confirmation orderResponse={orderDetails} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
