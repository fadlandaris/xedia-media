import React from 'react';
import { Profile } from '../assets/assets';

const ClientsRating = ({ data, icon }) => {
  let className = '';

  switch (data.name) {

  case 'Mahkota Enterprise':
  case 'Galaxy Decoration':
  case 'United E-Motor Jateng & DIY':
  case 'Virenze Interior':
    className = "bg-primaryBlue";
    break;
  case 'Ave Salon':
  case 'The Facial':
  case 'Reza Lunar Lighting':
  case 'Satset Indonesia':
    className = "border-[2px] border-dashed";
    break;
  default:
    className = " text-darkenBlue bg-white";
  }

  return (
    <section className={`p-10 rounded-2xl group  ${className} hover:scale-105 transition-all duration-300 cursor-pointer`}>
      {icon}
      <span className='font-bold text-2xl font-mono'>"</span>
      <p className='h-[230px] w-[310px] mb-4'>
        {data.desc}
      </p>
      <div className='flex items-center gap-x-4'>
        <div className='w-10 h-10 rounded-full  bg-white'>
          <img src={data.img} alt="" className='w-full h-full object-cover  rounded-full' />
        </div>
        <div>
          <h2 className='font-bold tracking-wide'>{data.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default ClientsRating;
