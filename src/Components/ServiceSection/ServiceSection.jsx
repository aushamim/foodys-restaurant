const ServiceSection = () => {
  return (
    <section id="services" className="section-default">
      <p className="subtitle text-center">Our Services</p>
      <h1 className="title text-center">
        We offer people best way
        <br />
        to eat healthy food
      </h1>
      <div className="grid grid-cols-3 gap-20 mt-10">
        <div className="py-10 flex flex-col items-center card-bg shadow-lg rounded-xl p-5 hover:scale-105 transition duration-500">
          <div className="p-3 rounded-full w-max bg-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-orange-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"></path>
              <path d="M12 3v3m0 12v3"></path>
            </svg>
          </div>
          <h3 className="text-center text-2xl font-semibold mt-3">
            Best Price Offer
          </h3>
          <p className="text-center subtitle">
            Price with very cheap will get a much
            <br />
            order food from customer
          </p>
        </div>

        <div className="py-10 flex flex-col items-center card-bg shadow-lg rounded-xl p-5 hover:scale-105 transition duration-500">
          <div className="p-3 rounded-full w-max bg-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-orange-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M6 18l12 -12"></path>
            </svg>
          </div>
          <h3 className="text-center text-2xl font-semibold mt-3">
            Discount System
          </h3>
          <p className="text-center subtitle">
            Price with very cheap will get a much
            <br />
            order food from customer
          </p>
        </div>

        <div className="py-10 flex flex-col items-center card-bg shadow-lg rounded-xl p-5 hover:scale-105 transition duration-500">
          <div className="p-3 rounded-full w-max bg-orange-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-orange-600"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5.636 19.364a9 9 0 1 1 12.728 0"></path>
              <path d="M16 9l-4 4"></path>
            </svg>
          </div>
          <h3 className="text-center text-2xl font-semibold mt-3">
            Quick Order Food
          </h3>
          <p className="text-center subtitle">
            Order food with very quicky and faster
            <br />
            and you no a long wait to bored
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
