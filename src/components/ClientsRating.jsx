import React from 'react';

const ClientsRating = ({ data, icon }) => {
  let className = '';

  if (data.id % 3 === 1) {
    className = " bg-blue-900 border-2 border-blue-600 ";
  } else if (data.id % 3 === 2) {
    className = "shadow-threeDimension";
  } else {
    className = "  bg-purple-900 border-2 border-purple-600 ";
  }

  return (
    <section className={`p-10 rounded-2xl group ${className} cursor-pointer group`}>
      {icon}
      <span className='font-bold text-4xl font-serif'>"</span>
      <p className=' h-[170px] mb-10 md:mb-4 text-[14px] font-medium '>
        {data.desc}
      </p>
      <div className='flex items-center gap-x-4'>
        <div className='w-10 h-10 rounded-full bg-white'>
          <img src={data.img} alt="" className='w-full h-full rounded-full' />
        </div>
        <div>
          <h2 className='text-[14px] sm:text-[14px] font-bold tracking-wide'>{data.name}</h2>
        </div>
      </div>
    </section>
  );
};

export default ClientsRating;
