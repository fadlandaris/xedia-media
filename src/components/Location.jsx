import React from 'react';
import styles from '../styles';
import Title from './Title';
import { locationData } from '../constants/constants';

const Location = () => {
  return (
    <main className={`${styles.containerPadding} bg-darkenBlue`}>
      <div className='max-w-7xl mx-auto'>

        {locationData.slice(0, 1).map((loc, i) => (
          <Title 
            key={i} 
            locationHeader={loc.header} 
            locationTitle={loc.title} 
            locationSubTitle={loc.subTitle} 
          />
        ))}

        <div className='border-2 border-dashed border-white p-2 rounded-2xl overflow-hidden h-[420px]'>
          <iframe 
            className='w-full h-full rounded-2xl'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.282803668141!2d110.39683497475757!3d-6.9759222930248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f50067b80bab%3A0x95a21b475de95bb0!2sXedia%20Media!5e0!3m2!1sen!2sid!4v1730313032296!5m2!1sen!2sid" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </main>
  );
}

export default Location;
