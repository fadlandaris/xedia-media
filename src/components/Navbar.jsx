import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close the mobile menu after clicking a link
    }
  };

  return (
    <nav className={`fixed top-0 w-full p-4 z-50 transition-all duration-300 ${isSticky ? 'bg-black bg-opacity-100' : 'bg-black bg-opacity-80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-white text-lg font-bold">Logo</a>
          </div>
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.link}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.link);
                }}
                className="text-light text-lg hover:text-orange-400 transition-colors duration-300"
              >
                {link.nav}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <div className="hamburger">
                <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-white transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link);
                  }}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-orange-400 transition-colors duration-300"
                >
                  {link.nav}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
