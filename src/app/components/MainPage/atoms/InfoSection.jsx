import Button from "../../Static/atoms/Button";

const MobileInfoSection = () => {
  return (
    <div className="flex flex-col items-center my-10 px-10">
      <img
        src="/cb.png"
        alt="Descriptive Alt Text"
        className="object-cover h-96 w-72 mx-auto mb-6 rounded"
      />
      <h2 className="text-3xl font-bold text-center mb-4">
        Din guide til sortering
      </h2>
      <p className="text-sm text-center mb-6">
        Her kan du se hvordan du skal sortere og hvad der skal i hvilke
        beholdere. Du får også tips og tricks til, hvordan du gør det nemt at
        sortere hjemme hos dig.
      </p>
      <div className="flex flex-col items-center space-y-4 mb-16">
        <Button className="w-full" variant="filled">
          Se affaldsguide
        </Button>
        <Button className="w-full" variant="outline">
          Bestil storskrald
        </Button>
      </div>
      <img
        src="/cb.png"
        alt="Descriptive Alt Text"
        className="object-cover h-96 w-72 mx-auto mb-6 rounded"
      />
      <h2 className="text-3xl font-bold text-center mb-4">
        Bestil din nye affaldsbeholder
      </h2>
      <p className="text-sm text-center mb-6">
        Her kan du se hvordan du skal sortere og hvad der skal i hvilke
        beholdere. Du får også tips og tricks til, hvordan du gør det nemt at
        sortere hjemme hos dig.
      </p>
      <Button className="w-full">Bestil nu</Button>
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="my-10  pt-10 md:pt-30 mx-auto px-10 max-w-7xl">
      <div className="hidden md:flex flex-col md:flex-row items-center mb-20">
        <div className="md:flex-1 md:pr-8">
          <h2 className="text-5xl font-bold mb-4">
            Din guide til
            <br />
            sortering
          </h2>
          <p className="text-sm mb-6 mt-6">
            Her kan du se hvordan du skal sortere og hvad der skal i hvilke
            <br />
            beholdere. Du får også tips og tricks til, hvordan du gør det nemt
            <br /> at sortere hjemme hos dig.
          </p>
          <div>
            <Button className="mr-4" variant="filled">
              Se affaldsguide
            </Button>
            <Button variant="outline">Bestil storskrald</Button>
          </div>
        </div>
        <div className="md:flex-1">
          <img
            src="/images/front01.webp"
            alt="billede af overfyldt skraldespand"
            className="object-cover h-[30rem] w-[24rem] mx-auto rounded"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-center">
        <div className="relative">
          <div className="hidden md:block absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 translate-y-[-45%] w-11/12 h-11/12 bg-gray-200"></div>

          <img
            src="/images/front02.webp"
            alt="billede af farvede skraldespande"
            className="object-cover h-[30rem] w-[24rem] rounded"
          />
        </div>
        <div className="md:flex-1 md:pl-80">
          <h2 className="text-5xl font-bold mb-4 mx-auto">
            Bestil din nye
            <br /> affaldsbeholder
          </h2>
          <p className="text-sm mb-6 mt-6">
            Her kan du se hvordan du skal sortere og hvad der skal i hvilke
            <br />
            beholdere. Du får også tips og tricks til, hvordan du gør det nemt
            <br /> at sortere hjemme hos dig.
          </p>
          <Button>Bestil nu</Button>
        </div>
      </div>

      <div className="md:hidden">
        <MobileInfoSection />
      </div>
    </div>
  );
};

export default InfoSection;
