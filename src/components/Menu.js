import * as React from "react";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <div className="flex justify-center mt-6 text-lg text-white font-OpenSans font-light">
      <Link
        to="/"
        activeClassName="text-yellow-400 font-semibold"
        className="hover:text-yellow-400"
      >
        Home
      </Link>
      <Link to="#" className="ml-5 hover:text-yellow-400">
        About
      </Link>
      <Link to="#" className="ml-5 hover:text-yellow-400">
        Skills
      </Link>
      <Link to="#" className="ml-5 hover:text-yellow-400">
        Portfolio
      </Link>
      <Link to="#" className="ml-5 hover:text-yellow-400">
        Experience
      </Link>
      <Link to="#" className="ml-5 hover:text-yellow-400">
        Blog
      </Link>
      <Link to="/contact" className="ml-5 hover:text-yellow-400">
        Contact
      </Link>
    </div>
  );
};

export default Menu;
