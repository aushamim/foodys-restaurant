import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section
      id="about"
      className="section-default aboutus-fix grid grid-cols-2 gap-16 items-center"
    >
      <div className="relative about-section-figure">
        <div className="m-14 p-40 2xl:m-36 2xl:p-48 bg-orange-200 rounded-full">
          <img className="w-full" src="/assets/Ellipse Small.svg" alt="Dots" />
        </div>
        <div className="w-[180px] h-[180px] 2xl:w-[250px] 2xl:h-[250px] bg-orange-300 rounded-full absolute top-5 right-10 2xl:top-24 2xl:right-24"></div>
        <div className="w-[130px] h-[130px] 2xl:w-[150px] 2xl:h-[150px] bg-orange-400 rounded-full absolute bottom-10 right-28 2xl:bottom-24 2xl:right-64"></div>
        <div className="w-[100px] h-[100px] 2xl:w-[100px] 2xl:h-[100px] bg-orange-500 rounded-full absolute top-36 left-5 2xl:top-56 2xl:left-32"></div>
      </div>
      <div>
        <p className="subtitle">About Us</p>
        <h1 className="title">
          We always provide
          <br />
          quality food for you
        </h1>
        <p className="subtitle">
          We will give some tips for making healthier choices when eating at a
          Ozorest and at the first time, fish must fried to gold colour and
          lowest fat before fried the fish effort for delicious food
        </p>
        <button className="btn-fill">Lern More</button>
      </div>
    </section>
  );
};

export default AboutUsSection;
