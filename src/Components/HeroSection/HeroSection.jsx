import "./HeroSection.css";
import { toast } from "react-hot-toast";

const HeroSection = () => {
  return (
    <section className="h-screen section-default grid grid-cols-2 gap-16 items-center bg-orange-50">
      <div>
        <p className="text-orange-500 font-semibold text-lg">
          Foody&apos;s Restaurant
        </p>
        <h1 className="title">
          Choose the best food
          <br />
          for your daily food
        </h1>
        <p className="subtitle">
          This restaurant typically serves food and drinks in addition to light
          refreshments such as baked goods or snacks. We can confidently say
          that you will be satisfied with our foods. So, why waste time waiting
          when you can order now!
        </p>
        <div className="mt-3">
          <button
            className="btn-fill mr-5"
            onClick={() => {
              toast("Coming Soon!", {
                icon: "⌛",
              });
            }}
          >
            Order Now
          </button>
          <a href="#menu" className="btn-no-fill">
            View Menu
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-10 right-0 flex flex-col justify-center h-full">
          <button
            onClick={() => {
              document.getElementById("food-img").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
            className="bg-white rounded-lg px-3 py-2 shadow-lg shadow-orange-200 flex items-center w-full my-5"
          >
            <p className="mr-2">🐸</p>
            <p className="text-gray-400 hover:text-orange-400 font-medium">
              Food
            </p>
          </button>
          <button
            onClick={() => {
              document.getElementById("dessert-img").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
            className="bg-white rounded-lg px-3 py-2 shadow-lg shadow-orange-200 flex items-center w-full my-5"
          >
            <p className="mr-2">🍨</p>
            <p className="text-gray-400 hover:text-orange-400 font-medium">
              Dessert
            </p>
          </button>
          <button
            onClick={() => {
              document.getElementById("drinks-img").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
            className="bg-white rounded-lg px-3 py-2 shadow-lg shadow-orange-200 flex items-center w-full my-5"
          >
            <p className="mr-2">🍻</p>
            <p className="text-gray-400 hover:text-orange-400 font-medium">
              Drinks
            </p>
          </button>
          <button
            onClick={() => {
              document.getElementById("snack-img").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
            }}
            className="bg-white rounded-lg px-3 py-2 shadow-lg shadow-orange-200 flex items-center w-full my-5"
          >
            <p className="mr-2">🍟</p>
            <p className="text-gray-400 hover:text-orange-400 font-medium">
              Snack
            </p>
          </button>
        </div>
        <div className="pl-10 relative flex items-center">
          <div className="w-[480px] h-[480px] 2xl:w-[700px] 2xl:h-[700px] bg-orange-100 rounded-full"></div>
          <div className="w-[430px] h-[430px] 2xl:w-[600px] 2xl:h-[600px] bg-orange-200 rounded-full absolute float-left ml-3 2xl:ml-5"></div>
          <div
            id="hero-carousel"
            className="w-[380px] h-[380px] 2xl:w-[500px] 2xl:h-[500px] rounded-full absolute float-left ml-6 2xl:ml-10 flex overflow-x-scroll snap-x snap-mandatory hidden-scrollbar"
          >
            <img
              id="food-img"
              className="w-full rounded-full snap-always snap-center"
              src="/assets/Best-Cream-Cheese-Pasta-Recipe.jpg"
              alt="Best-Cream-Cheese-Pasta-Recipe"
            />
            <img
              id="dessert-img"
              className="w-full rounded-full snap-always snap-center"
              src="/assets/lemon-panna-cotta-with-vodka-blueberry-syrup-92005-1.jpeg"
              alt="Best-Cream-Cheese-Pasta-Recipe"
            />
            <img
              id="drinks-img"
              className="w-full rounded-full snap-always snap-center"
              src="/assets/g6hd9p5g_sugar-free-summer-drinks_625x300_02_May_23.jpg"
              alt="Best-Cream-Cheese-Pasta-Recipe"
            />
            <img
              id="snack-img"
              className="w-full rounded-full snap-always snap-center"
              src="/assets/Air-Fryer-Fries-6.jpg"
              alt="Best-Cream-Cheese-Pasta-Recipe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
