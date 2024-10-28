import React, { useState } from 'react';
import { servicesData } from '../constants/constants';
import Title from './Title';
import Points from './Points';

const Services = () => {
  const [selectedService, setSelectedService] = useState(servicesData[1]); // Default to the second item

  const handleClick = (service) => {
    setSelectedService(service);
  };

  return (
    <main className='w-full py-24'>
      <div className='max-w-7xl mx-auto'>
        {servicesData.slice(0, 1).map((serv, i) => (
          <Title key={i} serviceHeader={serv.header} serviceTitle={serv.title} serviceSubTitle={serv.subTitle} />
        ))}

        <div className='flex justify-between'>
          {servicesData.slice(1, 8).map((serv, i) => (
            <a
              key={i}
              className={`text-center text-[12px] py-4 px-4 rounded-lg cursor-pointer transition-all duration-150 ${
                selectedService.id === serv.id ? 'bg-primaryBlue text-white' : 'hover:bg-primaryBlue hover:text-white'
              }`}
              onClick={() => handleClick(serv)}
            >
              {serv.serviceData.map((item, j) => (
                <h2 key={j} className='font-medium '>{item.title}</h2>
              ))}
            </a>
          ))}
        </div>

        <div className='mt-12 grid grid-cols-3 gap-x-8'>
          <div className='container h-[320px]'>
            {selectedService.serviceData.map((item, i) => (
              <img className='w-full h-full object-cover object-left rounded-2xl' key={i} src={item.content[0].img} alt={item.title} />
            ))}
          </div>

          {selectedService.serviceData.map((item, i) => (
            <div key={i} className='col-span-2 p-10 border-2 border-dashed border-primaryBlue rounded-2xl'>
              <h2 className='font-bold tracking-wide text-2xl text-lightBlack'>{item.title}</h2>
              {item.content.map((contentItem, j) => (
                <div key={j}>
                  <p className='text-text font-medium w-[80%] my-4'>{contentItem.desc}</p>
                  <Points points={contentItem.point} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
