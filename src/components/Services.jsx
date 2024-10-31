import React, { useState, useEffect } from 'react';
import { servicesData } from '../constants/constants';
import Title from './Title';
import Points from './Points';
import styles from '../styles';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[1]);
  const [animate, setAnimate] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (service) => {
    setSelectedService(service);
    setAnimate(true);
    setIsOpen(false);
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
    <main className={`relative w-full ${styles.containerPadding} `}>
      <div className='max-w-7xl mx-auto'>
        {servicesData.slice(0, 1).map((serv, i) => (
          <Title key={i} serviceHeader={serv.header} serviceTitle={serv.title} serviceSubTitle={serv.subTitle} />
        ))}

        <div className='relative'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-[12px] py-4 px-4 rounded-2xl cursor-pointer transition-all duration-150 bg-primaryBlue text-white flex justify-center items-center gap-x-2'
          >
            {selectedService.serviceData.map((item, j) => (
              <h2 key={j} className='font-medium flex justify-start items-center gap-x-2'>
                {item.title}
                {isOpen ? <IoMdArrowDropup className='text-lg' /> : <IoMdArrowDropdown className='text-lg' />}
              </h2>
            ))}
          </button>
          {isOpen && (
            <div className='absolute z-10 mt-2 p-4 border-2 border-dashed border-primaryBlue bg-white rounded-2xl'>
              <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                {servicesData.slice(1, 10).map((serv, i) => (
                  <a
                    key={i}
                    onClick={() => handleClick(serv)}
                    className={`block px-4 py-2 text-[12px] text-lightBlack cursor-pointer hover:bg-blue-50 hover:text-primaryBlue duration-300 transition-all ${
                      selectedService.id === serv.id ? 'text-primaryBlue' : ''
                    }`}
                    role='menuitem'
                  >
                    {serv.serviceData.map((item, j) => (
                      <h2 key={j} className='font-medium'>{item.title}</h2>
                    ))}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='mt-10 grid grid-cols-3 gap-x-8'>
          <div className={`container h-[320px] ${animate ? 'animate-fadeIn' : ''}`}>
            {selectedService.serviceData.map((item, i) => (
              <img className='w-full h-full object-cover object-left rounded-2xl' key={i} src={item.content[0].img} alt={item.title} />
            ))}
          </div>

          {selectedService.serviceData.map((item, i) => (
            <div key={i} className={`col-span-2 p-10 border-2 border-dashed border-primaryBlue rounded-2xl ${animate ? 'animate-fadeIn' : ''}`}>
              <h2 className='font-bold tracking-wide text-2xl text-lightBlack'>{item.title}</h2>
              {item.content.map((contentItem, j) => (
                <div key={j}>
                  <p className='text-text font-medium w-[80%] mt-4 mb-6'>{contentItem.desc}</p>
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
