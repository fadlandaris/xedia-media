import React, { useRef, useEffect } from 'react';
import Title from './Title';
import { clientsData } from '../constants/constants';
import styles from '../styles';
import ClientsRating from './ClientsRating';
import { RiStarSFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Graphic } from '../assets/assets'; // Replace with your background image path

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

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
    <main
      className={`w-full text-white ${styles.containerPadding} relative`}
      id="our-clients"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>

      {/* Background Image */}
      <img
        src={Graphic} 
        alt="Background Graphic"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-20" data-aos="fade-up">
        {clientsData.slice(0, 1).map((cli, i) => (
          <Title
            key={i}
            clientsHeader={cli.header}
            clientsTitle={cli.title}
            clientsSubTitle={cli.subTitle}
          />
        ))}

        <div className="relative ">
        {/* <div className="absolute inset-0 top-1/2 bottom-1/2 -translate-y-1/2 z-50"> */}
        {/* <div className="flex text-2xl justify-between mb-4"> */}
          <div
            className=" absolute z-50 -left-6  top-1/2 -translate-y-1/2 md:-left-10 bg-lime-400 text-black  rounded-full cursor-pointer"
            onClick={handlePrev}
          >
            <MdOutlineArrowLeft className='text-xl'/>
          </div>
          <div
            className=" absolute z-50 -right-6 md:-right-10 top-1/2 -translate-y-1/2 text-black bg-lime-400 rounded-full cursor-pointer"
            onClick={handleNext}
          >
            <MdOutlineArrowRight className='text-xl' />
          </div>
        {/* </div> */}
      {/* </div> */}

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
            className="mySwiper px-8"
          >
            {clientsData.slice(1, 2).map((clie, i) => (
              <div key={i}>
                {clie.statsData.map((item, i) => (
                  <SwiperSlide key={i}>
                    <ClientsRating
                      data={item}
                      icon={
                        <div className="flex text-xl text-yellow-400 mb-6">
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                          <RiStarSFill />
                        </div>
                      }
                    />
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
