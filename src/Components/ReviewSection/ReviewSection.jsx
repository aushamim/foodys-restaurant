const ReviewSection = () => {
  return (
    <section className="section-default">
      <p className="subtitle text-center">Testimonial</p>
      <h1 className="title text-center">What customer says about us</h1>
      <div className="grid grid-cols-3 gap-16 mt-10">
        {/* Repeat Start */}
        <div className="card-bg shadow-lg rounded-xl p-5 hover:-translate-y-3 transition duration-500">
          <div className="grid grid-cols-5 items-center">
            <div className="p-3">
              <img
                className="w-full rounded-full"
                src="/assets/amit.jpg"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <h3 className="font-semibold">Ashim Bhowmik</h3>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
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
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                  strokeWidth="0"
                  fill="currentColor"
                  className="fill-gray-300"
                ></path>
              </svg>
              &nbsp;4.9
            </div>
          </div>
          <p className="subtitle">
            “Foody is an awesome place for food order. Food is everything we
            are. It&apos;s an extension of nationalist feeling and ethnic
            feeling”
          </p>
        </div>
        {/* Repeat End */}

        <div className="card-bg shadow-lg rounded-xl p-5 hover:-translate-y-3 transition duration-500">
          <div className="grid grid-cols-5 items-center">
            <div className="p-3">
              <img
                className="w-full rounded-full"
                src="/assets/shihab.jpg"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <h3 className="font-semibold">Tahmid Shihab</h3>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
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
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                  strokeWidth="0"
                  fill="currentColor"
                  className="fill-gray-300"
                ></path>
              </svg>
              &nbsp;4.8
            </div>
          </div>
          <p className="subtitle">
            “Foody is an awesome place for food order. Food is everything we
            are. It&apos;s an extension of nationalist feeling and ethnic
            feeling”
          </p>
        </div>

        <div className="card-bg shadow-lg rounded-xl p-5 hover:-translate-y-3 transition duration-500">
          <div className="grid grid-cols-5 items-center">
            <div className="p-3">
              <img
                className="w-full rounded-full"
                src="/assets/nayeem.jpg"
                alt=""
              />
            </div>
            <div className="col-span-3">
              <h3 className="font-semibold">Ashikul Islam</h3>
              <p className="text-gray-400">Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=""
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
                <path
                  d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                  strokeWidth="0"
                  fill="currentColor"
                  className="fill-gray-300"
                ></path>
              </svg>
              &nbsp;5.0
            </div>
          </div>
          <p className="subtitle">
            “Foody is an awesome place for food order. Food is everything we
            are. It&apos;s an extension of nationalist feeling and ethnic
            feeling”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
