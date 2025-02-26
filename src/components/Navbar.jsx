import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10 h-32 ">
      <div className="flex justify-between items-center px-6 py-4 h-full">
        <h1 className="text-3xl font-bold">Wedding Bliss</h1>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <ul
          className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block`}
        >
          <li>
            <Link to="/" className="px-4 text-lg tracking-widest leading-3">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 text-lg tracking-widest leading-3"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="px-4 text-lg tracking-widest leading-3"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="px-4 text-lg tracking-widest leading-3"
            >
              Gallery
            </Link>
          </li>
          <span className="hidden md:inline-block w-[1px] h-8 bg-gray-400 mx-2"></span>
          <li>
            <Link
              to="/contact"
              className="nav-link contact-link px-4 text-lg tracking-widest leading-3"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
