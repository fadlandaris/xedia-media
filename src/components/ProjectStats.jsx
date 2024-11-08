import React from 'react';
import CountUp from 'react-countup';
import { objectImage } from '../assets/assets';

const ProjectStats = ({ data, isFirst }) => {
  let className = "";

  if (data.title === 'Completion Rate') {
    className = "bg-blue-900 border-2 border-blue-600 col-span-2";
  } else if (data.title === 'Client Statisfication') {
    className = " border-2 border-text md:border-none md:shadow-2xl";
  } else if (data.title === 'Cost Efficiency') {
    className = "bg-defaultColor bg-purple-900 text-white border-2 border-purple-600";
  }

  return (
    <main className={`p-4 sm:p-10 rounded-2xl flex relative overflow-hidden ${className}`}>
      {isFirst && (
        <img src={objectImage} className='absolute -right-36 bottom-0  ' />
      )}
      <div className='mt-16 md:mt-32 z-20'>
        <h2 className='font-medium'>{data.title}</h2>
        <p className='text-xl md:text-5xl font-bold my-4'>
          <CountUp end={parseFloat(data.data)} duration={20} suffix="%" />
        </p>
        <p className='w-[70%]'>{data.desc}</p>
      </div>
    </main>
  );
};

export default ProjectStats;
