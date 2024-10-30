import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Title from './Title';
import { portofolioData } from '../constants/constants';
import PortofolioItem from './PortofolioItem';
import { objectImage } from '../assets/assets';

const Portofolio = () => {
  const [selectedService, setSelectedService] = useState(portofolioData[1]);
  const [animate, setAnimate] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showSeeMore, setShowSeeMore] = useState(true);

  const handleClick = (service) => {
    setSelectedService(service);
    setAnimate(true);
    setItemsToShow(4); // Reset items to show when a new service is selected
    setShowSeeMore(true); // Show the "See More" button again
  };

  const handleSeeMore = () => {
    setAnimate(true);
    setItemsToShow(itemsToShow + 8);
    if (itemsToShow + 8 >= selectedService.serviceData[0].content.length) {
      setShowSeeMore(false); // Hide the "See More" button if all items are shown
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
      setShowSeeMore(false); // Hide the "See More" button if there are 4 or fewer items
    }
  }, [selectedService]);

  return (
    <main className={`w-full relative ${styles.containerPadding} border-black z-10`}>
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

        <div className='flex justify-between'>
          {portofolioData.slice(1, 8).map((port, i) => (
            <a
              key={i}
              className={`text-center text-[12px] py-4 px-4 rounded-2xl cursor-pointer transition-all duration-150 text-lightBlack ${
                selectedService.id === port.id ? 'bg-primaryBlue text-white' : ' hover:text-primaryBlue hover:bg-blue-50'
              }`}
              onClick={() => handleClick(port)}
            >
              {port.serviceData.map((item, j) => (
                <h2 key={j} className='font-medium '>{item.title}</h2>
              ))}
            </a>
          ))}
        </div>

        {selectedService.serviceData.map((item, i) => (
          <div
            key={i}
            className={`mt-10 rounded-2xl grid grid-cols-4 gap-6 ${animate ? 'animate-fadeIn' : ''}`}
          >
            {item.content.slice(0, itemsToShow).map((contentItem, j) => (
              <div key={j}>
                <PortofolioItem data={contentItem} />
              </div>
            ))}
          </div>
        ))}

        {showSeeMore && (
          <div className='text-center mt-4'>
            <button className={`font-semibold uppercase text-primaryBlue py-4 px-4  text-[12px] rounded-2xl ${animate ? 'animate-fadeIn' : ''}`} onClick={handleSeeMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Portofolio;
