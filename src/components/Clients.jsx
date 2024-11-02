import React, { useRef } from 'react';
import Title from './Title';
import { clientsData } from '../constants/constants';
import styles from '../styles';
import ClientsRating from './ClientsRating';
import { RiStarSFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Clients = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <main className={`w-full bg-darkenBlue text-white ${styles.containerPadding}`} id='our-clients'>
      <div className='max-w-7xl mx-auto'>
        {clientsData.slice(0, 1).map((cli, i) => (
          <Title key={i} clientsHeader={cli.header} clientsTitle={cli.title} clientsSubTitle={cli.subTitle} />
        ))}

        <div className='relative group'>
          <div className="flex justify-between mb-4 ">
            <FaAngleLeft onClick={handlePrev} className={`${styles.carouselButton}`} />
            <FaAngleRight onClick={handleNext} className={`${styles.carouselButton}`} />
          </div>

          <Swiper
            ref={swiperRef}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="mySwiper "
          >
            {clientsData.slice(1, 2).map((clie, i) => (
              <div key={i}>
                {clie.statsData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <ClientsRating data={item} icon={
                      <div className='flex text-xl text-yellow-400 mb-6'>
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                        <RiStarSFill />
                      </div>
                    } />
                  </SwiperSlide>
                ))}
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Clients;
