import React from 'react'
import styles from '../styles'
import { footerData } from '../constants/constants'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <main className={`pb-20 bg-darkenBlue px-8 md:px-20`}>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-4 gap-6'>
          {footerData.map((xedia, i) => (
            <div key={i} className={`p-6 ${xedia.id === '1' ? 'col-span-1 sm:col-span-2 text-white border-2 border-dashed  rounded-2xl' : 'border-2 border-dashed rounded-2xl border-white'}`}>
              <h2 className='font-bold text-xl text-white'>{xedia.title}</h2>
              
              {xedia.contact && xedia.contact.map((item, index) => (
                <div key={index} className={`flex justify-start items-start font-medium  ${item.id === '1' ? 'my-4' : ''}`}>
                  {/* <item.icon className='mr-2 text-[16px] mt-1 hidden '/> */}
                  <a className='hover:text-primaryBlue duration-300 transition-all cursor-pointer text-[14px]'>{item.stat}</a>
                </div>
              ))}

              {xedia.stat && xedia.stat.map((item, index) => (
                <div key={index} className='mt-2  text-white'>
                  <a href="" className=' font-medium hover:text-primaryBlue duration-300 transition-all text-[14px]'>{item.text}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='w-full mt-6 text-[14px] flex justify-between font-medium text-white border-2 p-6 border-dashed rounded-2xl'>
          <p className=''>© Xedia Media 2024. All rights reserved</p>

          <div className='flex gap-x-4 justify-between items-center'>
            {/* <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Tiktok</a> */}
            <FaFacebookF/>
            <FaTiktok/>
            <RiInstagramFill/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Footer
