import React from 'react'
import { Right, Left, Cloud } from '../assets/assets';

const Graphic = () => {
  return (
    <div>
      <img src={Left} alt="" className='absolute w-40 -left-10 -top-10' />
      <img src={Right} alt="" className='absolute w-40 -right-10 -bottom-10'/>
      <img src={Cloud} alt="" className='absolute w-60 -left-10 -bottom-5 '/>
      <img src={Cloud} alt="" className='absolute w-60 -right-10 -top-7'/>
    </div>
  )
}

export default Graphic