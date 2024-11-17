import React, { useEffect } from 'react';
import styles from '../styles';
import Title from './Title';
import { locationData } from '../constants/constants';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Graphic } from '../assets/assets'; // Replace with your background image path
import Footer from './Footer';

const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  return (
    <main
      className={`w-full text-white ${styles.containerPadding} relative`}
      id="our-location"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-90 z-10"></div>

      {/* Background Image */}
      <img
        src={Graphic} // Replace `Graphic` with your background image
        alt="Background Graphic"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-20">
        {locationData.slice(0, 1).map((loc, i) => (
          <Title
            key={i}
            locationHeader={loc.header}
            locationTitle={loc.title}
            locationSubTitle={loc.subTitle}
          />
        ))}

        <div
          className="border-2 border-blue-600 p-2 bg-blue-900 rounded-2xl overflow-hidden h-[420px]"
          data-aos="zoom-in"
        >
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.5425480277323!2d110.4559641790614!3d-7.039693803837629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c3eacc015a3%3A0xe80789430f46f64d!2sJl.%20Pandan%20Biru%20III%2C%20Sambiroto%2C%20Kec.%20Tembalang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050276!5e0!3m2!1sen!2sid!4v1731831230728!5m2!1sen!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Location;
