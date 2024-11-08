import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.6, 
    });

    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.link);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.link);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 text-white z-50 p-[2px] rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="bg-lightBlack rounded-2xl p-4">
        <div className="flex justify-center gap-x-4">
          {navLinks.map((nav, i) => (
            <a
              href={`#${nav.link}`}
              className={`cursor-pointer ${
                activeLink === nav.link ? 'text-purple-300' : 'text-white'
              }`}
              key={i}
            >
              <nav.icon />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
