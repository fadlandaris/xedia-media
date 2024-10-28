import React from 'react'
import { navLinks } from '../constants/constants'

const Navbar = () => {

  // console.log(navLinks)

  return (
    <main className='w-full fixed top-0 font-medium text-lightBlack z-50 bg-white '>
      <div className='max-w-7xl  mx-auto py-4 flex justify-between '>
        {navLinks.slice(0, 1).map((nav, i) => (
          <div key={i} className='flex gap-x-6'>
            {nav.header.map((item, i) => (
              // console.log(item)
              <a href={item.link} key={i}>{item.title}</a>
            ))}
          </div>
        ))}

        {navLinks.slice(1, 2).map((nav, i) => (
          <a href="" key={i} className='font-bold uppercase'>{nav.title}</a>
        ))}

        {navLinks.slice(2, 3).map((nav, i) => (
          <div key={i} className='flex gap-x-6'>
            {nav.header.map((item, i) => (
              // console.log(item)
              <a href={item.link} key={i}>{item.title}</a>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Navbar