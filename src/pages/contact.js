import * as React from "react";
import Menu from "../components/Menu";

// markup
const Contact = () => {
  return (
    <div class="">
      <Menu />
      <div className="mt-24 grid grid-cols-12">
        <div className="col-start-2 col-end-8 text-white">
          <h1 className="font-Montserrat font-bold text-4xl text-yellow-400">
            Get in touch
          </h1>
          <p className="font-OpenSans font-normal text-lg mt-3 mb-24">
            Leave me a message via the form and I'll reply
            <br /> even if it's to say hello
          </p>
          {/* Phone number */}
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone inline-block"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <p className="inline-block ml-4 font-OpenSans font-medium text-lg">
              +225 05 94 54 12 19
            </p>
          </div>
          {/* Email */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail inline-block"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <polyline points="3 7 12 13 21 7"></polyline>
            </svg>
            <p className="inline-block ml-4 font-OpenSans font-medium text-lg">
              tossdaniel@gmail.com
            </p>
          </div>
          {/* Location */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin inline-block"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="12" cy="11" r="3"></circle>
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
            </svg>
            <p className="inline-block ml-4 font-OpenSans font-medium text-lg">
              Abidjan, Côte d'Ivoire
            </p>
          </div>
        </div>
        <div className="col-end-12 col-span-4">
          <form action="#" method="post" class="mt-8 md:mt-6">
            <input
              className="mb-4 p-6 w-4/5 font-OpenSans h-14 md:h-16 focus:ring-2 focus:ring-yellow-400 focus:outline-none ring-1 ring-gray-200 shadow-md shadow-yellow-100/10"
              type="text"
              name="name"
              id=""
              required
              placeholder="Your name"
            />
            <input
              className="mb-4 p-6 w-4/5 font-OpenSans h-14 md:h-16 focus:ring-2 focus:ring-yellow-400 focus:outline-none ring-1 ring-gray-200 shadow-md shadow-yellow-100/10"
              type="email"
              name="email"
              id=""
              required
              placeholder="exemple@mail.com"
            />
            <textarea
              className="mb-4 p-6 w-4/5 focus:ring-2 focus:ring-yellow-400 focus:outline-none ring-1 ring-gray-200"
              placeholder="Message"
              rows="4"
            ></textarea>
            <input
              className="w-4/5 h-14 font-OpenSans text-lg md:h-16 md:text-2xl bg-yellow-300 shadow-md shadow-yellow-100/10"
              type="submit"
              value="Send message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
