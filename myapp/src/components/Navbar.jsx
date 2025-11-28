import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkClass =
    "block py-2 px-4 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-lg transition duration-300";

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      {/* Navbar content */}
      <div className="w-full flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-pink-600 tracking-wide"
          onClick={closeMenu}
        >
          Nandini’s Makeover
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={linkClass}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 font-bold"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <NavLink to="/" className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass} onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={closeMenu}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
