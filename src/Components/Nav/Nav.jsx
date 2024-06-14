import "./Nav.css";
import { toast } from "react-hot-toast";

const Nav = () => {
  return (
    <nav className="px-32 py-5 w-full grid grid-cols-5 items-center bg-orange-50 absolute">
      <div>
        <h1 className="text-2xl tracking-tight logo">Foody</h1>
      </div>
      <div className="col-span-3 text-lg text-center nav-links">
        <a href="/">Home</a>
        <a href="#services">Our Services</a>
        <a href="#menu">Our Menu</a>
        <a href="#about">About Us</a>
      </div>
      <div className="flex justify-end">
        <button
          className="btn-fill"
          onClick={() => {
            toast("Coming Soon!", {
              icon: "⌛",
            });
          }}
        >
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Nav;
