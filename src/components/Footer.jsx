import React from 'react';
import styles from '../styles';
import { footerData, navLinks } from '../constants/constants';

const Footer = () => {
  return (
    <>
      <main className={`w-full bg-gradient-to-tl from-black via-indigo-950 to-black text-white font-medium ${styles.containerPadding}`}>
        <div className='max-w-7xl mx-auto grid grid-cols-7 gap-x-16'>
          <div className='col-span-5'>
            {footerData.slice(0, 1).map((footer, i) => (
              <div key={i}>
                <img src={footer.img} alt={footer.img} className='w-20' />
                {footer.contact.map((item, i) => (
                  <a href={item.link || ''} className='flex justify-start items-start gap-x-2 mt-4' target={item.link ? '_blank' : ''} rel="noopener noreferrer">
                    <item.icon className='text-lg'/>
                    <p key={i} className={` ${item.id === '1' ? 'w-[70%]' : item.id === '3' ? '' : ''}`}>
                      {item.stat}
                    </p>
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div className="col-span-1">
            {footerData.slice(1, 2).map((item, i) => (
              <div key={i}>
                <h2 className='text-md font-bold mb-6'>{item.title}</h2>
                {item.stat.map((foot, j) => (
                  <a href={`#${foot.link}`} key={j} className={`${styles.footerText}`}>{foot.text}</a>
                ))}
              </div>
            ))}
          </div>

          <div className="col-span-1">
            {footerData.slice(2, 3).map((item, i) => (
              <div key={i}>
                <h2 className='text-md font-bold mb-6'>{item.title}</h2>
                {item.stat.map((foot, j) => (
                  <a
                    href={foot.link}
                    key={j}
                    className={`${styles.footerText} `}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {foot.text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      <main className={`bg-black p-4 text-white text-[12px]`}>
        <div className='max-w-7xl mx-auto'>
          © 2024 Xedia Media, All rights reserved
        </div>
      </main>
    </>
  );
};

export default Footer;
