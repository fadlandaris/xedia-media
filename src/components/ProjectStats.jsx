import React from 'react';
import CountUp from 'react-countup';
import { objectImage } from '../assets/assets';

const ProjectStats = ({ data, isFirst }) => {
  let className = "";

  if (data.title === 'Completion Rate') {
    className = "bg-primaryBlue col-span-2";
  } else if (data.title === 'Client Satisfaction') {
    className = "bg-lightBlue text-darkenBlue";
  } else if (data.title === 'Cost Efficiency') {
    className = "bg-defaultColor bg-white text-darkenBlue";
  }

  return (
    <main className={`p-10 rounded-xl flex relative ${className}`}>
      {isFirst && (
        <img src={objectImage} className='absolute right-0 bottom-0 w-896' />
      )}
      <div className='mt-32 z-20'>
        <h2 className='font-medium'>{data.title}</h2>
        <p className='text-5xl font-bold my-4'>
          {/* Using CountUp for counter effect */}
          <CountUp end={parseFloat(data.data)} duration={40} suffix="%" />
        </p>
        <p className='w-[80%]'>{data.desc}</p>
      </div>
    </main>
  );
};

export default ProjectStats;
