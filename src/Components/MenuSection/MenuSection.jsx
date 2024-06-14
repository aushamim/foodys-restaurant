import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const MenuSection = () => {
  const [activeBtn, setActiveBtn] = useState("Breakfast");
  const [food, setFood] = useState([]);

  const fetchData = (data = "breakfast") => {
    fetch(`/assets/JSON/${data}.json`)
      .then((res) => res.json())
      .then((result) =>
        setFood(window.screen.width < 1500 ? result.slice(0, 3) : result)
      );
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section id="menu" className="section-default">
      <div>
        <p className="subtitle text-center">Our Menu</p>
        <h1 className="title text-center">
          Browse our most popular
          <br />
          food recipes
        </h1>
        <div className="flex flex-col items-center">
          <div className="w-max mt-5 mb-10">
            <button
              className={
                activeBtn === "Breakfast" ? "btn-fill mx-5" : "btn-no-fill mx-5"
              }
              onClick={() => {
                setActiveBtn("Breakfast");
                fetchData("breakfast");
              }}
            >
              Breakfast
            </button>
            <button
              className={
                activeBtn === "Lunch" ? "btn-fill mx-5" : "btn-no-fill mx-5"
              }
              onClick={() => {
                setActiveBtn("Lunch");
                fetchData("lunch");
              }}
            >
              Lunch
            </button>
            <button
              className={
                activeBtn === "Dinner" ? "btn-fill mx-5" : "btn-no-fill mx-5"
              }
              onClick={() => {
                setActiveBtn("Dinner");
                fetchData("dinner");
              }}
            >
              Dinner
            </button>
            <button
              className={
                activeBtn === "Fast Food" ? "btn-fill mx-5" : "btn-no-fill mx-5"
              }
              onClick={() => {
                setActiveBtn("Fast Food");
                fetchData("fast_food");
              }}
            >
              Fast Food
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 2xl:grid-cols-4 gap-16 overflow-hidden p-10">
        {/* Repeat Start */}
        {food?.map((x) => (
          <div
            key={Math.random()}
            className="card-bg shadow-lg rounded-xl p-8 hover:scale-105 transition duration-500 grid"
          >
            <div className="relative">
              <img className="w-full rounded-full" src={x.img} alt="" />
              <div className="px-8 py-9 bg-orange-400 border-8 border-white text-white font-semibold rounded-full absolute bottom-0 right-0">
                ${x.price}
              </div>
            </div>
            <div>
              <h3 className="text-center text-2xl font-semibold mt-3">
                {x.name}
              </h3>
              <p className="subtitle text-center">{x.description}</p>
            </div>
            <button
              className="btn-fill w-full py-10 self-end"
              onClick={() => {
                toast.success("Added to Cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
        {/* Repeat End */}
      </div>
    </section>
  );
};

export default MenuSection;
