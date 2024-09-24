import React, { useState } from "react";
// import ieeeDelhiLogo from "../assets/images/ieee-delhi.png";
import Logo from "../assets/images/LOGO_.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar with contact info */}
      <div className="bg-blue-950 px-4 lg-custom:px-10 text-xl text-white py-2">
        <div className="max-w-full mx-auto">
          <div className="flex justify-around items-center">
            {/* Left contact info */}
            <div className="hidden lg-custom:flex space-x-4">
              <ul className="flex space-x-4">
                <li className="flex items-center">
                  <i className="far text-green-500 fa-envelope mr-1"></i>
                  ankur@iiitu.ac.in <span className="mx-2">|</span>
                </li>
                <li className="flex items-center">
                  <i className="fas text-green-500 fa-phone-volume mr-1"></i>
                  +91 98370-12205
                </li>
              </ul>
            </div>
            {/* Right contact info */}
            <div className="hidden lg-custom:flex space-x-4">
              <ul className="flex space-x-4">
                <li className="flex items-center">
                  <i className="far text-green-500 fa-envelope mr-1"></i>
                  namangarg@iiitu.ac.in <span className="mx-2">|</span>
                </li>
                <li className="flex items-center">
                  <i className="fas text-green-500 fa-phone-volume mr-1"></i>
                  +91 95556-98585
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-gray-300 py-4">
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Title */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src={Logo} alt="Logo" className="h-16 mr-2 hidden lg-custom:block" />
                <h1 className="font-sans text-green-700 font-medium text-2xl lg-custom:text-5xl">
                  ICIC3S 2025
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Navigation Menu */}
            <nav className="hidden lg-custom:flex justify-between items-center space-x-12">
              <a href="/" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                About
              </a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium flex items-center focus:outline-none">
                  Committee <span className="ml-1">&#9662;</span>
                </button>
                <div className="absolute hidden group-hover:block bg-white shadow-lg">
                  <a href="/advisory" className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap">
                    Advisory Committee
                  </a>
                  <a href="/org" className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap">
                    Organizing Committee
                  </a>
                  <a href="technicalPgm.html" className="block px-4 py-2 text-gray-900 hover:bg-green-100 text-xl font-medium whitespace-nowrap">
                    Technical Program Committee
                  </a>
                </div>
              </div>
              <a href="/callforpaper" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                Call for Paper
              </a>
              <a href="/papersubmit" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                Paper Submission
              </a>
              <a href="/register" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                Registration
              </a>
              <a href="/contact" className="text-gray-900 hover:text-green-700 font-sans text-xl font-medium">
                Contact
              </a>
            </nav>

            {/* Logo section (Hidden on small screens) */}
            {/* <div className="hidden lg-custom:flex items-center space-x-4">
              <img src={ieeeDelhiLogo} alt="IEEE Delhi Logo" className="h-16" />
            </div> */}
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg-custom:hidden mt-4">
              <nav className="space-y-2">
                <a href="/" className="block text-gray-900 hover:text-green-700 font-sans text-lg">
                  Home
                </a>
                <a href="/about" className="block text-gray-900 hover:text-green-700 font-sans text-lg">
                  About
                </a>
                <div>
                  <button className="w-full text-left text-gray-900 hover:text-green-700 font-sans text-lg flex items-center focus:outline-none" onClick={toggleMenu}>
                    Committee <span className="ml-1">&#9662;</span>
                  </button>
                  <div className="mt-2 ml-4">
                    <a href="/advisory" className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg">Advisory Committee</a>
                    <a href="/org" className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg">Organizing Committee</a>
                    <a href="technicalPgm.html" className="block px-2 py-1 text-gray-900 hover:bg-green-100 text-lg">Technical Program Committee</a>
                  </div>
                </div>
                <a href="/callforpaper" className="block text-gray-900 hover:text-green-700 font-sans text-lg">Call for Paper</a>
                <a href="/papersubmit" className="block text-gray-900 hover:text-green-700 font-sans text-lg">Paper Submission</a>
                <a href="/register" className="block text-gray-900 hover:text-green-700 font-sans text-lg">Registration</a>
                <a href="/contact" className="block text-gray-900 hover:text-green-700 font-sans text-lg">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
