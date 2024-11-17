import React from 'react';
import { FaCheck } from "react-icons/fa6";

const Points = ({ points }) => {
  return (
    <div>
      {points.map((point, index) => (
        <div key={index} className={`mb-2 mx-auto flex justify-start items-center text-[12px] font-medium ${index === 1 ? '' : ''}`}>
          <div className='p-1 bg-blue-600 rounded-full mr-2 scale-75'>
            <FaCheck className='text-white' />
          </div>
          {point}
        </div>
      ))}
    </div>
  );
};

export default Points;
