import React from 'react';
import { Profile } from '../assets/assets';

const ClientsRating = ({ data, icon }) => {
  let className = '';

  switch (data.name) {

  case 'Raka Eldiansyah':
  // case 'Fadlan Daris':
  case 'Nabila Pratiwi':
    className = "bg-primaryBlue";
    break;
  case 'Rayhan Aulia':
  case 'Andi Wijaya':
    className = "border-[2px] border-dashed";
    break;
  default:
    className = " text-darkenBlue bg-white";
  }

  return (
    <section className={`p-10 rounded-2xl group  ${className} hover:scale-105 transition-all duration-300 cursor-pointer`}>
      {icon}
      <p className='h-[150px] w-[310px] mb-12 desc-text'>
        <p className='text-4xl font-bold font-serif'>" </p>
        {data.desc}
      </p>
      <div className='flex items-center gap-x-4'>
        <div className='w-10 h-10 rounded-full'>
          <img src={Profile} alt="" className='w-full h-full object-cover rounded-full' />
        </div>
        <div>
          <h2 className='font-bold tracking-wide'>{data.name}</h2>
          <p>{data.company}</p>
        </div>
      </div>
    </section>
  );
}

export default ClientsRating;
