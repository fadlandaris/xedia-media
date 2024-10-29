import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Points = ({ points }) => {
  return (
    <div>
      {points.map((point, index) => (
        <div key={index} className={`mx-auto flex justify-start items-center text-[12px] font-medium ${index === 1 ? 'my-4' : ''}`}>
          <div className='p-1 bg-primaryBlue rounded-full mr-2 scale-75'>
            <FaCheck className='text-white' />
          </div>
          {point}
        </div>
      ))}
    </div>
  );
};

export default Points;
