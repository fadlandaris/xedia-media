import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.link);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.link);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="w-full py-4 px-8 md:px-20 bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-primaryBlue text-lg font-bold">XediaMedia</a>
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
                className={`text-lightBlack text-[13px] hover:text-text transition-all duration-300 font-medium ${
                  activeSection === link.link ? 'underline underline-offset-4 decoration-primaryBlue text-primaryBlue' : ''
                }`}
              >
                {link.nav}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              <div className="hamburger">
                <span className={`block w-6 h-0.5 bg-lightBlack transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-4 h-0.5 bg-lightBlack transition-all duration-300 my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-lightBlack transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5 ' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="space-y-4 my-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.link}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.link);
                  }}
                  className={` block font-medium hover:text-text transition-all duration-300 ${
                    activeSection === link.link ? 'underline underline-offset-4 decoration-primaryBlue text-primaryBlue' : ''
                  }`}
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
