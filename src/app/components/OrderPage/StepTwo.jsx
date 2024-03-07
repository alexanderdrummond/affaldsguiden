import { useState } from "react";
import Button from "../Static/atoms/Button";

const StepTwo = ({ onSubmit }) => {
  const [orderData, setOrderData] = useState({
    fullname: "",
    address: "",
    zipcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
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
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
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
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={orderData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefon"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
          value={orderData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => onSubmit(orderData)}
          className="mt-10 py-2 px-4 rounded-md"
        >
          Videre
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
