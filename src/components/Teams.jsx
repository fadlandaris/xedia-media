import { Link } from 'react-router-dom'
import React from 'react'
import styles from '../styles'
import { IoIosArrowRoundBack } from "react-icons/io";
import { teamData } from '../constants/constants';

const Teams = () => {

  console.log(teamData)

  return (
    <main className={`${styles.containerPadding} h-screen relative overflow-hidden bg-darkenBlue`}>
      <Link className='fixed top-4 left-4 px-2 py-2 rounded-2xl bg-white text-darkenBlue hover:scale-110 duration-300 transition-all text-2xl z-50' to='/'><IoIosArrowRoundBack/></Link>
        <div className='max-w-7xl border-2 mx-auto h-full text-white border-dashed'>
          test
        </div>
    </main>
  )
}

export default Teams