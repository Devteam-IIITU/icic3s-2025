import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer font-[sans-serif] bg-zinc-900 text-gray-300">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Address Section */}
          <div className="footer-left">
            <h3 className="text-3xl font-semibold mb-2">Address</h3>
            <p className="capitalize">
              Indian Institute of Information Technology Una
            </p>
            <p>Himachal Pradesh</p>
            <p className="phone">Saloh (HP) - 177209</p>
          </div>

          {/* Email Section */}
          <div className="footer-middle border-l border-gray-500 pl-8">
            <h3 className="text-3xl font-semibold mb-2">Email us at</h3>
            <p className="email">ankur@iiitu.ac.in</p>
            <p className="email">namangarg@iiitu.ac.in</p>
          </div>

          {/* Call Us Section */}
          <div className="footer-middle border-l border-gray-500 pl-8">
            <h3 className="text-3xl font-semibold mb-2">Call us at</h3>
            <p className="phone">Mobile: (+91) 98370-12205</p>
            <p className="phone">Mobile: (+91) 95556-98585</p>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links border-l border-gray-500 pl-8">
            <h3 className="text-3xl font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul>
                <li>
                  <a
                    href="/"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/callforpaper.html"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>Call for Paper</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href="/papersubmit"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>Submission</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/advisory"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>Committee</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200"
                  >
                    <span>Contacts</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-zinc-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-base">
            © 2025 ICIC3S. All rights reserved. | Design by |
            <a
              href="https://www.linkedin.com/in/vansh-verma-07932a27b"
              target="_blank"
              className="text-blue-400 hover:underline ml-1"
              rel="noopener noreferrer"
            >
              Vansh Verma
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
