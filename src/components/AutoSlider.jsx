import React, { useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa6';

const AutoSlider = ({ items }) => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const itemWidth = 160; // Width of each item including gap
    const totalWidth = items.length * itemWidth;
    let currentPosition = 0;

    const moveCarousel = () => {
      currentPosition -= 1;
      if (currentPosition <= -totalWidth) {
        currentPosition = 0;
      }
      carousel.style.transform = `translateX(${currentPosition}px)`;
    };

    intervalRef.current = setInterval(moveCarousel, 10); 

    return () => clearInterval(intervalRef.current);
  }, [items.length]);

  return (
    <div className='overflow-hidden'>
      <div
        ref={carouselRef}
        className='flex justify-start gap-x-6'
        style={{ width: `${items.length * 120}px` }} 
      >
        {[...items, ...items].map((serv, i) => (
          <div key={i} className=''>
            <div className='flex justify-start items-start text-[10px] font-medium  w-[120px]  '>
              <div className='p-1 bg-lime-400 rounded-full mr-2 scale-75'>
                <FaCheck className='text-black' />
              </div>
              {serv.serv}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
