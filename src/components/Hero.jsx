import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroData } from '../constants/constants';
import { FaPenNib } from 'react-icons/fa';
import { headerImage } from '../assets/assets';
import styles from '../styles';
import AutoSlider from './AutoSlider';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <main className={`w-full text-lightBlack ${styles.containerPadding} `} id='home'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8'>
        <div
          className='border-2 border-dashed rounded-2xl border-primaryBlue p-10'
          data-aos='fade-right'
        >
          {heroData.slice(0, 1).map((head, i) => (
            <div key={i}>
              {head.header.map((item, j) => (
                <div key={j}>
                  <div
                    className='mb-4 font-semibold py-1 px-2 border-2 border-[#e8eff7] inline-block rounded-full'
                    data-aos='zoom-in'
                  >
                    <div className='flex items-center text-[12px]'>
                      <div className='p-1 border-2 rounded-full mr-2 bg-primaryBlue'>
                        <FaPenNib className='text-white text-[10px]' />
                      </div>
                      <p className='mr-2'>{item.rating}</p>
                      <p className='text-text font-medium'>customer rating</p>
                    </div>
                  </div>
                  <div className='font-bold text-3xl lg:text-5xl' data-aos='fade-up'>
                    <h2>{item.title}</h2>
                    <h2 className='my-4'>{item.subTitle}</h2>
                    <h2>{item.thirdTitle}</h2>
                  </div>
                  <p className='mt-4 text-text font-medium w-[80%]' data-aos='fade-up'>
                    {item.desc}
                  </p>
                  <button
                    className='px-6 py-3 rounded-2xl my-12 bg-primaryBlue text-white text-[14px] flex items-center group'
                    data-aos='fade-up'
                  >
                    {item.button}
                    <item.icon className='text-xl ml-2 group-hover:ml-4 transition-all duration-150' />
                  </button>
                  <AutoSlider items={item.service} />
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='container h-full' data-aos='fade-left'>
          <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />
        </div>
      </div>
    </main>
  );
};

export default Hero;
