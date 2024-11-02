import React from 'react'
import styles from '../styles'
import { footerData } from '../constants/constants'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <main className={`pb-20 bg-darkenBlue px-8 md:px-20`} id='footer'>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-4 '>
          {footerData.map((xedia, i) => {
            // Define `className` for each `xedia` item
            let className = '';

            if (xedia.id === '1') {
              className = "col-span-1 sm:col-span-2 rounded-2xl border-white text-white border-2 border-dashed";
            } else if (xedia.id === '2') {
              className = " rounded-2xl border-white text-white border-2 border-dashed";
            } else if (xedia.id === '3') {
              className = "rounded-2xl border-white text-white border-2 border-dashed relative overflow-hidden hover:bg-primaryBlue hover:text-white cursor-pointer transition-all duration-300 group";
            }

            return (
              <a key={i} className={`px-10 p-6 ${className}`}>
                <h2 className='font-bold text-xl '>{xedia.title}</h2>
                
                {xedia.contact && xedia.contact.map((item, index) => (
                  <div key={index} className={`flex justify-start items-start font-medium ${item.id === '1' ? 'my-4' : ''}`}>
                    <a  className='cursor-pointer text-[14px]'>{item.stat}</a>
                  </div>
                ))}

                {xedia.stat && xedia.stat.map((item, index) => (
                  <div key={index} className='mt-2  '>
                    <a href={`#${item.link}`} className='font-medium hover:text-primaryBlue duration-300 transition-all text-[14px]'>{item.text}</a>
                    <img src={item.img} alt="" className='absolute w-60 -left-10 -bottom-10 group-hover:scale-110 transition-all duration-300 ' />
                  </div>
                ))}
              </a>
            )
          })}
        </div>

        <div className='w-full mt-6 text-[14px] flex justify-between font-medium text-white border-2 p-6 border-dashed rounded-2xl'>
          <p>© Xedia Media 2024. All rights reserved</p>

          <div className='flex gap-x-4 justify-between items-center'>
            <FaFacebookF/>
            <FaTiktok/>
            <RiInstagramFill/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer;
