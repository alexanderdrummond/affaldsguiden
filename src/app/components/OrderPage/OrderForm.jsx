import { useState, useEffect } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useNotification } from "@/app/context/NotificationContext";

const OrderForm = () => {
  const [step, setStep] = useState(1);
  const [selectedContainerId, setSelectedContainerId] = useState(null);
  const [containers, setContainers] = useState([]);
  const { showNotification } = useNotification();

  useEffect(() => {
    fetch("http://localhost:3000/containers")
      .then((response) => response.json())
      .then((data) => setContainers(data))
      .catch((error) => console.error("fetch error:", error));
  }, []);

  const handleContinue = () => {
    if (!selectedContainerId) {
      showNotification("error", "Vælg en container før du fortsætter");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (orderData) => {
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

        showNotification("success", "Bestilling oprettet succesfuldt");
      } else {
        console.error("failed to create", response.status, response.statusText);
        showNotification("error", "Fejl ved oprettelse af bestilling");
      }
    } catch (error) {
      showNotification("error", "Netværksfejl ved indsendelse af bestilling");
    }
  };

  return (
    <div className="flex flex-col items-center my-14">
      <div className="w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-xl">
        <div className="flex">
          <div className="w-1/3 bg-[#114D46] p-4"></div>
          <div className="w-2/3 p-8">
            {step === 1 ? (
              <StepOne
                containers={containers}
                onContinue={handleContinue}
                onContainerSelect={setSelectedContainerId}
                selectedContainerId={selectedContainerId}
              />
            ) : (
              <StepTwo onSubmit={handleSubmit} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
