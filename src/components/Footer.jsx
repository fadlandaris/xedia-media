import React from 'react'
import styles from '../styles'
import { footerData, navLinks } from '../constants/constants'


const Footer = () => {
  return (
    <>
      <main className={`w-full bg-black text-white ${styles.containerPadding}`}>
      <div className='max-w-7xl mx-auto grid grid-cols-7 gap-x-16'>
        <div className=' col-span-5'>
          {footerData.slice(0, 1).map((footer, i) => (
            <div key={i}>
              <img src={footer.img} alt={footer.img} className='w-14' />
              {footer.contact.map((item, i) => (
               <p key={i} className={`mt-4 text-[12px] ${item.id === '1' ? 'w-[50%]' : item.id === '3' ? ' font-semibold' : ''}`}>
               {item.stat}
              </p>             
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
                <a href={`#${foot.link}`} key={j} className={`${styles.footerText}`}>{foot.text}</a>
              ))}
            </div>
          ))}
        </div>
      </div>      
    </main>

    <main className={`bg-blue-900 p-4 text-white text-[12px]`}>
      <div className='max-w-7xl mx-auto '>
        © 2024 Xedia Media, All rights reserved
      </div>
    </main>
    </>
    
  )
}

export default Footer