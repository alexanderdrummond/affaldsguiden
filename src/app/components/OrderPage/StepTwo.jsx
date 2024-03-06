import { useState } from "react";

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
      <h2 className="text-xl">Trin 2</h2>
      <h3 className="text-lg font-bold mt-4">Hvor skal den leveres?</h3>
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
      <button
        onClick={() => onSubmit(orderData)}
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Send
      </button>
    </div>
  );
};

export default StepTwo;
