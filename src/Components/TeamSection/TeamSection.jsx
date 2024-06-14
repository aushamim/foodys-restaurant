const TeamSection = () => {
  return (
    <section className="section-default aboutus-fix grid grid-cols-2 gap-16 items-center">
      <div>
        <p className="subtitle">About Us</p>
        <h1 className="title">
          Our teams awesome
          <br />
          reserve for your food
        </h1>
        <p className="subtitle">
          This is our teams very good experience to cooking a food and reserve
          drink for customer and you can order with online or offline
          reservation for breakfast, lunch, or dinner
        </p>
        <button className="btn-fill">Make Reserve</button>
      </div>
      <div className="relative about-section-figure">
        <div className="m-14 p-40 2xl:m-36 2xl:p-48 bg-orange-200 rounded-full">
          <img className="w-full" src="/assets/Ellipse Small.svg" alt="Dots" />
        </div>
        <div className="w-[180px] h-[180px] 2xl:w-[250px] 2xl:h-[250px] bg-orange-300 rounded-full absolute bottom-5 left-14 2xl:bottom-24 2xl:left-24"></div>
        <div className="w-[130px] h-[130px] 2xl:w-[150px] 2xl:h-[150px] bg-orange-400 rounded-full absolute bottom-64 right-3 2xl:bottom-64 2xl:right-24"></div>
        <div className="w-[100px] h-[100px] 2xl:w-[100px] 2xl:h-[100px] bg-orange-500 rounded-full absolute top-14 left-16 2xl:top-32 2xl:left-56"></div>
      </div>
    </section>
  );
};

export default TeamSection;
