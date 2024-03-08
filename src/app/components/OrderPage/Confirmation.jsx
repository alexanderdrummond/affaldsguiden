const Confirmation = ({ orderResponse }) => {
  if (!orderResponse) {
    return <div>Loader ordre detaljer..</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-extralight">Bekræftelse</h2>
      <h3 className="text-2xl mt-6 font-normal">Ordredetaljer</h3>
      <div className="mt-4 text-left">
        <p>
          <strong>Ordrenummer:</strong> {orderResponse.id}
        </p>
        <p>
          <strong>Navn:</strong> {orderResponse.fullname}
        </p>
        <p>
          <strong>Adresse:</strong> {orderResponse.address},{" "}
          {orderResponse.zipcode} {orderResponse.city}
        </p>
        <p>
          <strong>Email:</strong> {orderResponse.email}
        </p>
        <p>
          <strong>Telefon:</strong> {orderResponse.phone}
        </p>
      </div>
    </div>
  );
};

export default Confirmation;
