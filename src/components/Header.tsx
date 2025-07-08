import React, { useState } from "react";
import Logo from "../assets/images/LOGO_.png";
import { IoClose } from "react-icons/io5";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="top-0 left-0 z-20 ">
      {/* Main Navbar */}
      <div className="bg-gray-300 w-full py-4">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="h-16 mr-2 hidden lg-custom:block"
                />
                <h1 className="font-sans text-green-700 font-medium text-2xl lg-custom:text-5xl">
                  ICIC3S 2026
                </h1>
              </a>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="lg-custom:hidden block text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg-custom:flex justify-between items-center space-x-12">
              <a
                href="/"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                About
              </a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium flex items-center focus:outline-none">
                  Committee <span className="ml-1">&#9662;</span>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  <a
                    href="/advisory"
                    className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap"
                  >
                    Advisory Committee
                  </a>
                  <a
                    href="/org"
                    className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap"
                  >
                    Organizing Committee
                  </a>
                  <a
                    href="/technical"
                    className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap"
                  >
                    Technical Program Committee
                  </a>
                </div>
              </div>
              <a
                href="/callforpaper"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                Call for Paper
              </a>
              <a
                href="/papersubmit"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                Paper Submission
              </a>
              <a
                href="/register"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                Registration
              </a>
              <a
                href="https://ieeexplore.ieee.org/xpl/conhome/10602773/proceeding"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
              1<sup>st</sup> ICIC3S
              </a>
              <a
                href="/contact"
                className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg-custom:hidden z-5 fixed inset-0 bg-gray-300 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="absolute top-0 left-0 w-full p-4">
              <button
                onClick={closeMenu}
                className="text-black focus:outline-none absolute top-4 right-4"
              >
                <IoClose className="text-[1.5rem]" />
              </button>
            </div>
            <div className="flex flex-col items-center mt-16 text-center">
              <a
                href="/"
                className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                onClick={closeMenu}
              >
                About
              </a>
              <div className="flex flex-col items-center">
                <div className="mt-2 space-y-2">
                  <a
                    href="/advisory"
                    className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg"
                    onClick={closeMenu}
                  >
                    Advisory Committee
                  </a>
                  <a
                    href="/org"
                    className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg"
                    onClick={closeMenu}
                  >
                    Organizing Committee
                  </a>
                  <a
                    href="/technical"
                    className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg"
                    onClick={closeMenu}
                  >
                    Technical Program Committee
                  </a>
                  <a
                    href="/callforpaper"
                    className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                    onClick={closeMenu}
                  >
                    Call for Paper
                  </a>
                  <a
                    href="/papersubmit"
                    className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                    onClick={closeMenu}
                  >
                    Paper Submission
                  </a>
                  <a
                    href="/register"
                    className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                    onClick={closeMenu}
                  >
                    Registration
                  </a>
                  <a
                    href="https://ieeexplore.ieee.org/xpl/conhome/10602773/proceeding"
                    className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    1<sup>st</sup> ICIC3S
                  </a>
                  <a
                    href="/contact"
                    className="block text-gray-900 hover:text-green-700 font-sans text-lg py-2"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
