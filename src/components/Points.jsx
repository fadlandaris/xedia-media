import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Points = ({ points, portfolioPoints }) => {
  return (
    <div>
      {portfolioPoints ? (
        portfolioPoints.map((point, index) => (
          <div key={index} className='h-[40px] mb-2 mx-auto flex justify-start items-start text-[12px] font-medium'>
            <div className='p-1 bg-lime-400 rounded-full mr-2 scale-75'>
              <FaCheck className='text-black' />
            </div>
            {point}
          </div>
        ))
      ) : (
        points.map((point, index) => (
          <div key={index} className='mb-2 mx-auto flex justify-start items-center text-[12px] font-medium'>
            <div className='p-1 bg-lime-400 rounded-full mr-2 scale-75'>
              <FaCheck className='text-black' />
            </div>
            {point}
          </div>
        ))
      )}
    </div>
  );
};

export default Points;
