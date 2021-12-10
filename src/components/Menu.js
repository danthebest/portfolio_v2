import * as React from "react";
import { Link } from "gatsby";

const Menu = () => {
  return (
    <div className="flex justify-center mt-6 text-lg text-white">
      <Link to="/">Home</Link>
      <Link to="#" className="ml-5">
        About
      </Link>
      <Link to="#" className="ml-5">
        Skills
      </Link>
      <Link to="#" className="ml-5">
        Portfolio
      </Link>
      <Link to="#" className="ml-5">
        Experience
      </Link>
      <Link to="#" className="ml-5">
        Blog
      </Link>
      <Link to="/contact" className="ml-5">
        Contact
      </Link>
    </div>
  );
};

export default Menu;
