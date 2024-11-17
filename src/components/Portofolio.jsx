import React, { useState, useEffect } from 'react';
import styles from '../styles';
import Title from './Title';
import { portofolioData } from '../constants/constants';
import PortofolioItem from './PortofolioItem';
import LoadingSpinner from './LoadingSpinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portofolio = () => {
  const [selectedService, setSelectedService] = useState(portofolioData[1]);
  const [animate, setAnimate] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [showSeeMore, setShowSeeMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  const handleClick = (service) => {
    setIsLoading(true); // Start loading
    setSelectedService(service);
    setAnimate(true);
    setItemsToShow(4);
    setShowSeeMore(true);

    // Simulate a delay to show the loading spinner
    setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 1000); // Adjust the delay as needed
  };

  const handleSeeMore = () => {
    setIsLoading(true); // Start loading
    setAnimate(true);
    setItemsToShow(itemsToShow + 16);
    if (itemsToShow + 16 >= selectedService.serviceData[0].content.length) {
      setShowSeeMore(false);
    }

    // Simulate a delay to show the loading spinner
    setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 1000); // Adjust the delay as needed
  };

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  useEffect(() => {
    if (selectedService.serviceData[0].content.length <= 4) {
      setShowSeeMore(false);
    }
  }, [selectedService]);

  return (
    <main className={`w-full relative ${styles.containerPadding}  z-10`} id='our-portofolio'>
      <div className='max-w-7xl mx-auto z-20' data-aos="fade-up">
        {portofolioData.slice(0, 1).map((port, i) => (
          <Title
            key={i}
            portofolioHeader={port.header}
            portofolioSubTitle={port.subTitle}
            portofolioTitle={port.title}
          />
        ))}

        <div className='grid grid-cols-5 gap-4 mb-8'>
          {portofolioData.slice(1).map((port, i) => (
            <button
              key={i}
              onClick={() => handleClick(port)}
              className={`text-[15px] py-4 px-4 rounded-2xl cursor-pointer transition-all duration-150  text-white flex justify-center items-center gap-x-2 hover-two-color-gradient ${
                selectedService.id === port.id ? 'two-color-gradient border-no' : ' bg-fuchsia-900 border-fuchsia-600'
              }`}
            >
              {port.serviceData.map((item, j) => (
                <h2
                  key={j}
                  className='font-medium flex justify-start items-center gap-x-2'
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              ))}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div className='col-span-3 flex justify-center items-center h-full'>
            <LoadingSpinner />
          </div>
        ) : (
          selectedService.serviceData.map((item, i) => (
            <div key={i} className={`mt-10 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${animate ? 'animate-fadeIn' : ''}`}>
              {item.content.slice(0, itemsToShow).map((contentItem, j) => (
                <div key={j}>
                  <PortofolioItem data={contentItem} />
                </div>
              ))}
            </div>
          ))
        )}

        {!isLoading && showSeeMore && (
          <div className='text-center mt-8'>
            <button className={`font-semibold mx-auto text-white bg-blue-900 border-blue-600 py-2 px-4 border-2 text-[10px] flex items-center justify-center gap-1 rounded-2xl ${animate ? 'animate-fadeIn' : ''}`} onClick={handleSeeMore}>
              View More
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Portofolio;
