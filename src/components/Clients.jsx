import React, { useRef } from 'react';
import Title from './Title';
import { clientsData } from '../constants/constants';
import styles from '../styles';
import ClientsRating from './ClientsRating';
import { RiStarSFill } from "react-icons/ri";
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const Clients = () => {
  const elementRef = useRef(null);

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += 1000;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= 1000;
    }
  };

  return (
    <main className={`w-full bg-darkenBlue text-white ${styles.containerPadding}`}>
      <div className='max-w-7xl mx-auto'>
        {clientsData.slice(0, 1).map((cli, i) => (
          <Title key={i} clientsHeader={cli.header} clientsTitle={cli.title} clientsSubTitle={cli.subTitle} />
        ))}

        <div className='relative group '>
          <div className="flex justify-between mb-2">
            <FaAngleLeft  onClick={sliderLeft} className={`${styles.carouselButton}`} />
            <FaAngleRight onClick={sliderRight} className={`${styles.carouselButton}`} />
          </div>

          {clientsData.slice(1, 2).map((clie, i) => (
            <div key={i} ref={elementRef} className='flex overflow-x-auto w-full scroll-smooth scrollbar-none rounded-lg gap-x-8 p-3 '>
              {clie.statsData.map((item, i) => (
                <ClientsRating key={i} data={item} icon={
                  <div className='flex text-xl text-yellow-500 mb-6'>
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                    <RiStarSFill />
                  </div>
                } />
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Clients;
