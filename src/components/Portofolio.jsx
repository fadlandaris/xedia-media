import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Title from './Title';
import { portofolioData } from '../constants/constants';
import PortofolioItem from './PortofolioItem';
import { objectImage } from '../assets/assets';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Portofolio = () => {
  const [selectedService, setSelectedService] = useState(portofolioData[1]);
  const [animate, setAnimate] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (service) => {
    setSelectedService(service);
    setAnimate(true);
    setItemsToShow(4);
    setShowSeeMore(true);
    setIsOpen(false);
  };

  const handleSeeMore = () => {
    setAnimate(true);
    setItemsToShow(itemsToShow + 16);
    if (itemsToShow + 16 >= selectedService.serviceData[0].content.length) {
      setShowSeeMore(false);
    }
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    if (selectedService.serviceData[0].content.length <= 4) {
      setShowSeeMore(false);
    }
  }, [selectedService]);

  return (
    <main className={`w-full relative ${styles.containerPadding} border-black z-10`} id='our-portofolio'>
      {/* <img src={objectImage} alt="" className='absolute right-0 bottom-0 w-[24' /> */}
      {/* <div className='container w-12 h-24 absolute right-0 top-0 bg-primaryBlue rounded-bl-full '></div>
      <div className='container w-12 h-24 absolute left-0 bottom-0 bg-primaryBlue rounded-tr-full '></div> */}
      <div className='max-w-7xl mx-auto z-20'>
        {portofolioData.slice(0, 1).map((port, i) => (
          <Title
            key={i}
            portofolioHeader={port.header}
            portofolioSubTitle={port.subTitle}
            portofolioTitle={port.title}
          />
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
                {portofolioData.slice(1, 10).map((port, i) => (
                  <a
                    key={i}
                    onClick={() => handleClick(port)}
                    className={`block px-4 py-2 text-[12px] text-lightBlack cursor-pointer hover:bg-blue-50 hover:text-primaryBlue duration-300 transition-all ${
                      selectedService.id === port.id ? 'text-primaryBlue' : ''
                    }`}
                    role='menuitem'
                  >
                    {port.serviceData.map((item, j) => (
                      <h2 key={j} className='font-medium'>{item.title}</h2>
                    ))}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {selectedService.serviceData.map((item, i) => (
          <div key={i} className={`mt-10 rounded-2xl grid grid-cols-4 gap-6 ${animate ? 'animate-fadeIn' : ''}`}>
            {item.content.slice(0, itemsToShow).map((contentItem, j) => (
              <div key={j}>
                <PortofolioItem data={contentItem} />
              </div>
            ))}
          </div>
        ))}

        {showSeeMore && (
          <div className='text-center mt-4'>
            <button className={`font-semibold uppercase text-primaryBlue py-4 px-4 text-[12px] rounded-2xl ${animate ? 'animate-fadeIn' : ''}`} onClick={handleSeeMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Portofolio;
