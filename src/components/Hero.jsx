import React from 'react';
import { heroData } from '../constants/constants';
import { FaPenNib } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { headerImage } from '../assets/assets';
import styles from '../styles';
import AutoSlider from './AutoSlider'; 

const Hero = () => {
  return (
    <main className={`w-full text-lightBlack ${styles.containerPadding}`} id='home'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 gap-8'>
        <div className='border-2 border-dashed rounded-2xl border-primaryBlue p-10'>
          {heroData.slice(0, 1).map((head, i) => (
            <div key={i}>
              {head.header.map((item, j) => (
                <div key={j}>
                  <div className='mb-4 font-semibold py-1 px-2 border-2 border-[#e8eff7] inline-block rounded-full'>
                    <div className='flex items-center text-[12px]'>
                      <div className='p-1 border-2 rounded-full mr-2 bg-primaryBlue'>
                        <FaPenNib className='text-white text-[10px]' />
                      </div>
                      <p className='mr-2'>{item.rating}</p>
                      <p className='text-text font-medium'>costumer rating</p>
                    </div>
                  </div>
                  <div className='font-bold text-5xl'>
                    <h2>{item.title}</h2>
                    <h2 className='my-4'>{item.subTitle}</h2>
                    <h2>{item.thirdTitle}</h2>
                  </div>
                  <p className='mt-4 text-text font-medium w-[80%]'>{item.desc}</p>
                  <button href='' className='px-6 py-3 rounded-2xl my-12 bg-primaryBlue text-white text-[14px] flex items-center group'>
                    {item.button}
                    <item.icon className='text-xl ml-2 group-hover:ml-4 transition-all duration-150' />
                  </button>
                  <AutoSlider items={item.service} /> 
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='container h-full relative'>
          <img src={headerImage} className='w-full h-full object-cover rounded-2xl' />

          <div className='absolute rounded-lg bottom-4 left-5 right-4'>
            {heroData.slice(1, 2).map((data, i) => (
              <div key={i} className='grid grid-cols-4 p-4 gap-x-4'>
                {data.projectData.map((item, j) => (
                  <div key={j} className='bg-white p-4 text-center rounded-2xl hover:bg-primaryBlue transition-all duration-300 hover:scale-110 cursor-pointer group'>
                    <h2 className='text-light font-bold text-xl group-hover:text-white transition-all duration-300'>
                      {item.data}
                    </h2>
                    <p className='text-[12px] text-text font-medium group-hover:text-white transition-all duration-300'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
