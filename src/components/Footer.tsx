import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer font-[sans-serif] bg-zinc-900 text-gray-300">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}
          <div className="footer-left">
            <h3 className="text-3xl font-semibold mb-2">Address</h3>
            <p className="capitalize">Indian Institute of Information Technology Una</p>
            <p>Himachal Pradesh</p>
            <p className="phone">Saloh (HP) - 177209</p>
          </div>

          {/* Email Section */}
          <div className="footer-middle">
            <h3 className="text-3xl font-semibold mb-2">Email us at</h3>
            <p className="email">ankur@iiitu.ac.in</p>
            <p className="email">namangarg@iiitu.ac.in</p>
          </div>

          {/* Call Us Section */}
          <div className="footer-middle">
            <h3 className="text-3xl font-semibold mb-2">Call us at</h3>
            <p className="phone">Mobile: (+91) 98370-12205</p>
            <p className="phone">Mobile: (+91) 95556-98585</p>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links">
            <h3 className="text-3xl font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <ul>
                <li>
                  <a href="index.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">    
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="about_us.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="callforpaper.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">
                    <span>Call for Paper</span>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="papersub.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">
                    <span>Submission</span>
                  </a>
                </li>
                <li>
                  <a href="advisory.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">
                    <span>Committee</span>
                  </a>
                </li>
                <li>
                  <a href="contact_us.html" className="flex items-center space-x-1 hover:text-yellow-400 transition duration-200">
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
            © 2025 ICIC3S. All rights reserved.
            {/* Uncomment to add design credit
            | Design by |
            <a
              href="https://www.linkedin.com/in/mohit-bagdi-356463240/"
              target="_blank"
              className="text-blue-400 hover:underline ml-1"
              rel="noopener noreferrer"
            >
              Mohit Bagdi
            </a>
            */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
