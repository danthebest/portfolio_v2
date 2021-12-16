import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <div className="mt-24 text-white">
      {/* Begin Header */}
      <div className="grid grid-cols-2">
        <div className="ml-56">
          <div className="bg-yellow-400 rounded-tl-full rounded-tr-full rounded-br-full py-2 w-36">
            <p className="text-center text-primary font-OpenSans font-medium text-lg">
              Hello, I'm
            </p>
          </div>
          <h1 className="mt-16 text-5xl font-Montserrat font-semibold">
            Daniel Tossou
          </h1>
          <p className="text-xl font-Montserrat font-medium uppercase mt-3">
            Product Designer
          </p>
          {/* Location */}
          <div className="mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-map-pin inline-block text-yellow-400"
              width="24"
              height="24"
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
            <p className="inline-block ml-4 font-OpenSans">
              Abidjan, Côte d'Ivoire
            </p>
          </div>
          {/* Phone number */}
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-phone inline-block"
              width="24"
              height="24"
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
            <p className="inline-block ml-4 font-OpenSans">
              +225 05 94 54 12 19
            </p>
          </div>
          {/* Email */}
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mail inline-block"
              width="24"
              height="24"
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
            <p className="inline-block ml-4 font-OpenSans">
              tossdaniel@gmail.com
            </p>
          </div>

          {/* SOCIAL MEDIA SECTION */}
          <div className="mt-8 space-x-4">
            {/* Github */}
            <div className="hover:border-b-yellow-400 hover:border-b-4 hover:pb-1 hover:text-yellow-400 inline-block hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github inline-block"
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
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </div>

            {/* Dribbble */}
            <div className="hover:border-b-yellow-400 hover:text-yellow-400  hover:border-b-4 hover:pb-1 inline-block hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-dribbble inline-block"
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
                <circle cx="12" cy="12" r="9"></circle>
                <path d="M9 3.6c5 6 7 10.5 7.5 16.2"></path>
                <path d="M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4"></path>
                <path d="M3.1 10.75c5 0 9.814 -.38 15.314 -5"></path>
              </svg>
            </div>

            {/* Instagram */}
            <div className="hover:border-b-yellow-400 hover:text-yellow-400  hover:border-b-4 hover:pb-1 inline-block hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram inline-block"
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
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
              </svg>
            </div>

            {/* LinkedIn */}
            <div className="hover:border-b-yellow-400 hover:text-yellow-400 hover:border-b-4 hover:pb-1 inline-block hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin inline-block"
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
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <line x1="8" y1="11" x2="8" y2="16"></line>
                <line x1="8" y1="8" x2="8" y2="8.01"></line>
                <line x1="12" y1="16" x2="12" y2="11"></line>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <StaticImage
            src="../images/african-in-tech-nobg.png"
            alt="Young digital creator"
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* End Header */}

      {/* Begin About me */}
      <div id="about" className="grid grid-cols-2 mt-16">
        <div className="flex justify-center">
          <StaticImage
            src="../images/black-freelancer.png"
            alt="Young black developer"
            width={444}
            height={396}
          />
        </div>
        <div className="mt-24">
          <h1 className="text-3xl font-Montserrat font-semibold">About Me</h1>
          <p className="text-base font-OpenSans mt-4 mb-8 w-3/4">
            I started with web development but my passion for interface design
            led me to focus more on front-end development and product design. I
            am passionate about designing simple and intuitive prototypes every
            day.
          </p>
          <a className="bg-yellow-400 text-primary hover:bg-white hover:cursor-pointer text-base rounded-full px-6 py-3">
            <span className="font-OpenSans">Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-cloud-download inline-block ml-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4"></path>
              <line x1="12" y1="13" x2="12" y2="22"></line>
              <polyline points="9 19 12 22 15 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
      {/* End About me */}

      {/* Begin Skills */}
      <div id="skills" className="grid grid-cols-2 mt-16">
        <div className="">
          <h1 className="text-3xl font-Montserrat font-semibold text-center">
            What I can do
          </h1>
          <div className="text-lg text-center mt-8 font-OpenSans">
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Visual & Interaction Design
            </p>
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Prototyping with Figma
            </p>
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Work with Trello, Asana and Git
            </p>
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Implementation with HTML & CSS
            </p>
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Developed front end with React
            </p>
            <p className="hover:text-yellow-400 hover:uppercase hover:cursor-pointer mb-2">
              Front end Optimization
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          {/* TODO Create a mosaic Image on Figma with my most used tools in UX and Dev */}
        </div>
      </div>
      {/* End Skills */}
    </div>
  );
};

export default Header;
