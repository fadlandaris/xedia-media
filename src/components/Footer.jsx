import React from 'react'
import styles from '../styles'
import { footerData } from '../constants/constants'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <main className={`pb-20 bg-darkenBlue`}>
      <div className='max-w-7xl mx-auto'>
        <div className='w-full grid grid-cols-4 gap-6'>
          {footerData.map((xedia, i) => (
            <div key={i} className={`p-6 ${xedia.id === '1' ? 'col-span-2 text-white border-2 border-dashed  rounded-2xl' : 'border-2 border-dashed rounded-2xl border-white'}`}>
              <h2 className='font-bold text-xl text-white'>{xedia.title}</h2>
              
              {xedia.contact && xedia.contact.map((item, index) => (
                <div key={index} className={`flex justify-start items-start font-medium  ${item.id === '1' ? 'my-4' : ''}`}>
                  <p className='mr-2 '>{item.icon}</p>
                  <a className='hover:text-primaryBlue duration-300 transition-all cursor-pointer'>{item.stat}</a>
                </div>
              ))}

              {xedia.stat && xedia.stat.map((item, index) => (
                <div key={index} className='mt-4  text-white'>
                  <a href="" className=' font-medium hover:text-primaryBlue duration-300 transition-all'>{item.text}</a>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className='w-full mt-6 flex justify-between font-medium text-white border-2 p-6 border-dashed rounded-2xl'>
          <p className=''>© Xedia Media 2024. All rights reserved</p>

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

export default Footer
