import * as React from "react";
import { Link } from "gatsby";

const toggleMenu = () => {
  document
    .getElementById("mobile-menu-button")
    .addEventListener("click", () => {
      document.querySelector(".mobile-menu").classList.toggle("hidden");
    });
};

const Menu = () => {
  return (
    <div>
      <nav className="shadow-lg text-lg text-white font-OpenSans font-light">
        <div className="max-w-6xl mx-auto py-4">
          <div className="sm:hidden flex justify-center">
            <Link
              to="/"
              activeClassName="text-yellow-400 font-semibold"
              className="hover:text-yellow-400"
            >
              Home
            </Link>
            <Link to="#about" className="ml-5 hover:text-yellow-400">
              About
            </Link>
            <Link to="#skills" className="ml-5 hover:text-yellow-400">
              Skills
            </Link>
            <Link to="#" className="ml-5 hover:text-yellow-400">
              Portfolio
            </Link>
            <Link to="#experience" className="ml-5 hover:text-yellow-400">
              Experience
            </Link>
            <Link to="#" className="ml-5 hover:text-yellow-400">
              Blog
            </Link>
            <Link to="/contact" className="ml-5 hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="outline-none"
            id="mobile-menu-button"
            onClick={toggleMenu}
          >
            <svg
              className=" w-6 h-6 hover:text-yellow-400 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div class="hidden mobile-menu">
        <Link
          to="/"
          activeClassName="text-yellow-400 font-semibold"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Home
        </Link>
        <Link
          to="#about"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          About
        </Link>
        <Link
          to="#skills"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Skills
        </Link>
        <Link
          to="#"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Portfolio
        </Link>
        <Link
          to="#experience"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Experience
        </Link>
        <Link
          to="#"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Blog
        </Link>
        <Link
          to="/contact"
          className="block text-sm px-2 py-4 transition duration-300 hover:text-yellow-400"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Menu;
