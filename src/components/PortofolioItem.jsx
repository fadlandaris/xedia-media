import React from 'react';
import Points from './Points';

const PortofolioItem = ({ data }) => {
  return (
    <div className='rounded-2xl w-full h-full shadow-md cursor-pointer hover:scale-105 transition-all duration-300'>
      {data.title ? (
        <div className='border-2 border-blue-600  p-6 rounded-2xl bg-blue-900'>
          <div className='text-white'>
            <div className='flex justify-start gap-x-2 items-center mb-8'>
              <img src={data.img} className='w-10 h-10 rounded-full' />
              <h2 className=' font-bold uppercase'>{data.title}</h2>
            </div>
            <Points portfolioPoints={data.point} />
          </div>
        </div>
      ) : (
        <img src={data.img} alt="" className='w-full h-full object-cover rounded-2xl' />
      )}
    </div>
  );
};

export default PortofolioItem;
