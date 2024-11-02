import { Link } from 'react-router-dom'
import React from 'react'
import styles from '../styles'
import { IoIosArrowRoundBack } from "react-icons/io";
import { teamData } from '../constants/constants';
import { Right, Left, Cloud } from '../assets/assets';

const Teams = () => {

  console.log(teamData)

  return (
    <main className={`${styles.containerPadding} h-screen relative overflow-hidden bg-darkenBlue`}>
      <Link className='fixed top-4 left-4 px-2 py-2 rounded-2xl bg-white text-darkenBlue hover:scale-110 duration-300 transition-all text-2xl z-50' to='/'><IoIosArrowRoundBack/></Link>
      <img src={Left} alt="" className='absolute w-40 -left-6 -top-6' />
      <img src={Right} alt="" className='absolute w-40 -right-6 -bottom-6'/>
      <img src={Cloud} alt="" className='absolute -left-12 -bottom-20'/>
      <img src={Cloud} alt="" className='absolute -right-40 -top-20'/>
        <div className='max-w-7xl border-2 mx-auto h-full text-white border-dashed'>
          test
        </div>
    </main>
  )
}

export default Teams