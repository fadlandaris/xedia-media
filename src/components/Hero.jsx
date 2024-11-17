import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroData } from '../constants/constants';
import { FaPenNib } from 'react-icons/fa';
import { headerImage } from '../assets/assets';
import styles from '../styles';
import AutoSlider from './AutoSlider';
import { xediaLogo } from '../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <main className={`w-full text-white ${styles.containerPadding} `} id='home'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-3 gap-x-8'>
        <div data-aos="fade-right" className=' col-span-2 rounded-2xl p-10 border-2 bg-gradient-to-tl from-black via-indigo-950 to-black  border-fuchsia-600 '>
          {heroData.slice(0, 1).map((head, i) => (
            <div key={i}>
              {head.header.map((item, j) => (
                <div key={j}>
                  <div
                    className=' font-semibold py-1 px-2 inline-block rounded-full'
                    data-aos='zoom-in'
                  >
                    <div className='flex items-center text-[12px]'>
                      {/* <div className='p-1 rounded-full mr-2 bg-primaryBlue'>
                        <FaPenNib className='text-white text-[10px]' />
                      </div> */}
                      <img src={xediaLogo} className='w-40' />
                      {/* <p className='text-text font-medium'>Xedia Media</p> */}
                    </div>
                  </div>
                  <div className='flex items-center uppercase font-bold text-2xl gap-1 ' data-aos='fade-up'>
                    <h2 className='uppercase'>{item.title}</h2>
                    <h2 className='my-4'>{item.subTitle}</h2>
                    {/* <h2>{item.thirdTitle}</h2> */}
                  </div>
                  <p className='mt-4 text-[15px]' data-aos='fade-up'>
                    {item.desc}
                  </p>
                  <div>
                  </div>

                  <div className='flex justify-between items-center gap-x-12 mt-8'>
                    <a
                      href='https://wa.me/6282328713200?text=Hello%20Xedia%20Media!'
                      className={`px-6 py-3 rounded-2xl w-80 font-bold text-white text-[14px] flex items-center group bg-[#e4562e] `}
                      data-aos='fade-up'
                    >
                      {item.button}
                      <item.icon className='text-xl ml-2 group-hover:ml-4 transition-all duration-150' />
                    </a>
                    <AutoSlider items={item.service} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='container h-full' data-aos='fade-left'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay]}
            className="h-full"
          >
            <SwiperSlide>
              <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Hero;
