import React, { useState, useEffect } from 'react';
import { servicesData } from '../constants/constants';
import Title from './Title';
import Points from './Points';
import styles from '../styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[1]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  const handleClick = (service) => {
    setSelectedService(service);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <main className={`relative w-full ${styles.containerPadding} `} id='our-services'>
      <div className='max-w-7xl mx-auto' data-aos="fade-up">
        {servicesData.slice(0, 1).map((serv, i) => (
          <Title key={i} serviceHeader={serv.header} serviceTitle={serv.title} serviceSubTitle={serv.subTitle} />
        ))}

        <div className=' grid grid-cols-5 gap-4 mb-8'>
          {servicesData.slice(1).map((serv, i) => (
            <button
              key={i}
              onClick={() => handleClick(serv)}
              className={` text-[15px] py-4 rounded-2xl cursor-pointer transition-all duration-150 bg-purple-900 border-2 border-purple-600 text-white flex justify-center items-center gap-x-2 ${
                selectedService.id === serv.id ? 'border-primaryBlue' : ''
              }`}
            >
              {serv.serviceData.map((item, j) => (
                <h2
                key={j}
                className='font-medium flex justify-start items-center gap-x-2'
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
              ))}
            </button>
          ))}
        </div>

        <div className='mt-10 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 '>
          <div className={`  ${animate ? 'animate-fadeIn' : ''}`}>
            {selectedService.serviceData.map((item, i) => (
              <img className='w-full h-full object-cover object-left rounded-2xl ' key={i} src={item.content[0].img} alt={item.title} />
            ))}
          </div>

          {selectedService.serviceData.map((item, i) => (
            <div key={i} className={`col-span-2 p-10 bg-blue-900 border-2 border-blue-600 rounded-2xl text-white ${animate ? 'animate-fadeIn' : ''}`}>
              <h2
              className='font-bold tracking-wide lg:text-2xl'
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
              {item.content.map((contentItem, j) => (
                <div key={j}>
                  <p className='text-white font-medium text-[12px] mt-4 mb-6'>{contentItem.desc}</p>
                  <Points points={contentItem.point} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
