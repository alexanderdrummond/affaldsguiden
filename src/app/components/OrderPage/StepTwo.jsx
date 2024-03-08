import { useState } from "react";
import Button from "../Static/atoms/Button";

const StepTwo = ({ onSubmit, errors }) => {
  const [orderData, setOrderData] = useState({
    fullname: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleSubmit = () => {
    onSubmit(orderData);
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-extralight">Trin 2</h2>
      <h3 className="text-2xl  mt-6 font-normal">Leveringsadresse</h3>
      <p className="text-sm mt-2">Lorem ipsum</p>
      <div className="mt-4">
        <input
          type="text"
          name="fullname"
          placeholder="Fulde navn"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={orderData.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Gade/vej + nummer"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={orderData.address}
          onChange={handleChange}
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Postnummer"
          className={`border rounded-md p-2 w-full mb-4 ${
            errors.zipcode ? "border-red-500" : "border-gray-300"
          }`}
          value={orderData.zipcode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Bynavn"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={orderData.city}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className={`border rounded-md p-2 w-full mb-4 ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={orderData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefon"
          className={`border rounded-md p-2 w-full mb-4 ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          value={orderData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="mt-10 py-2 px-4 rounded-md">
          Send
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
