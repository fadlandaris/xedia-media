import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Title = ({ aboutHeader, aboutTitle, aboutSubTitle, serviceHeader, serviceTitle, serviceSubTitle, clientsHeader, clientsTitle, clientsSubTitle, portofolioTitle, portofolioHeader, portofolioSubTitle, locationHeader, locationTitle, locationSubTitle }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  return (
    <div className='' data-aos="fade-up">
      <p className="text-white uppercase inline-block px-4 py-1 rounded-md font-bold bg-rose-600 ">{aboutHeader}{serviceHeader}{clientsHeader}{portofolioHeader}{locationHeader}</p>
      <div className="text-4xl mt-4 mb-4">
        <h2 className={`font-bold text-white`}>
        {/* ${serviceTitle || portofolioTitle  ? 'text-lightBlack' : 'text-white'} */}
          {aboutTitle}{serviceTitle}{clientsTitle}{portofolioTitle}{locationTitle}
        </h2>
        <h2 className={`font-bold text-white text-2xl `}>
        {/* ${serviceSubTitle || portofolioSubTitle  ? 'text-lightBlack' : 'text-text'} */}
          {aboutSubTitle}{serviceSubTitle}{clientsSubTitle}{portofolioSubTitle}{locationSubTitle}
        </h2>
      </div>
    </div>
  );
};


export default Title;
