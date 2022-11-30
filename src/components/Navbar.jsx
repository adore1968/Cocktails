import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white text-black p-5 mb-14">
      <ul className="flex justify-around items-center">
        <li>
          <Link to="/" className="text-xl sm:text-2xl font-semibold">
            The<span className="text-green-500">Cocktail</span>DB
          </Link>
        </li>
        <li className="text-lg sm:text-xl">
          <Link to="/" className="mr-5 hover:text-green-500 transitions-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-500 transition-colors">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
