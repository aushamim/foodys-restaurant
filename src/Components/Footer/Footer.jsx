import "./Footer.css";

const Footer = () => {
  return (
    <footer className="section-default footer-fix bg-white">
      <div className="grid grid-cols-3">
        <div>
          <h1 className="text-2xl tracking-tight logo mb-3">Foody</h1>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-400 -mt-1 mr-2"
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
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <p className="text-gray-400 my-2">Shukrabad, Dhaka</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-400 -mt-1 mr-2"
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
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
            </svg>
            <p className="text-gray-400 my-2">support@foodymail.com</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-gray-400 -mt-1 mr-2"
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
              <path d="M4 14v-3a8 8 0 1 1 16 0v3"></path>
              <path d="M18 19c0 1.657 -2.686 3 -6 3"></path>
              <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
              <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z"></path>
            </svg>
            <p className="text-gray-400 my-2">+880 1234567890</p>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-4">
          <div>
            <h3 className="text-gray-400 text-xl font-semibold mb-6">
              Our Services
            </h3>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Food Delivery
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Dine In System
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Take Away
            </button>
          </div>
          <div>
            <h3 className="text-gray-400 text-xl font-semibold mb-6">
              About Us
            </h3>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Our Teams
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Benefit
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Career Teams
            </button>
          </div>
          <div>
            <h3 className="text-gray-400 text-xl font-semibold mb-6">
              Categories
            </h3>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Delicious Food
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Cold and Hot Drink
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Fresh Desert
            </button>
          </div>
          <div>
            <h3 className="text-gray-400 text-xl font-semibold mb-6">
              Helpful Links
            </h3>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Payment and Tax
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Terms Condition
            </button>
            <button className="block my-3 font-medium text-gray-400 hover:text-orange-600 transition duration-500">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      <p className="subtitle text-center pt-8">
        Copyright Foody 2023 All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
