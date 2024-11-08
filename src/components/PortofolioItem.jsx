import React from 'react'

const PortofolioItem = ({data}) => {

  // console.log(data)

  return (
    <div className='rounded-2xl w-full h-full shadow-md cursor-pointer hover:scale-105 transition-all duration-300 border-2 p-1 bg-blue-900 border-blue-600'>
     <img src={data.img} alt="" className='w-full h-full object-cover rounded-2xl  ' />
     {/* <p>{data.desc}</p> */}
    </div>
  )
}

export default PortofolioItem