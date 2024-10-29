import React from 'react'
import { navLinks } from '../constants/constants'

const Navbar = () => {

  // console.log(navLinks)

  return (
    <section className='fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-6 px-6 py-2 rounded-full bg-white cursor-pointer z-30 border-2 border-[#e8eff7] shadow-sm'>
      {navLinks.map((nav) => (
        <div key={nav.id} className='relative flex flex-col items-center group'>
          
          <a href={`/${nav.link}`} className='text-lightBlack flex items-center hover:scale-110 transition-all duration-150'>
            {nav.icon && <nav.icon />} 
          </a>
          
          {/* <div className='bg-primary text-[12px] rounded-full px-4 py-2 absolute bottom-10 opacity-0 group-hover:opacity-100 text-lightBlack transition-opacity duration-300 bg-white'>
            {nav.nav}
          </div> */}
        </div>
      ))}
    </section>
  )
}

export default Navbar