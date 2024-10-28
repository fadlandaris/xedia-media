import React from 'react'
import { aboutData } from '../constants/constants'
import ProjectStats from './ProjectStats'

const About = () => {

  // console.log(aboutData)

  return (
    <main className='w-full bg-darkenBlue py-24 text-white'>
      <div className='max-w-7xl mx-auto'>
        {aboutData.slice(0, 1).map((about, i) => (
          <div key={i}>
            <p className='text-text uppercase'>/ {about.header}</p>
            <div className='text-4xl mt-4 mb-20'>
              <h2 className='font-semibold'>{about.title}</h2>
              <h2 className='text-text font-semibold'>{about.subTitle}</h2>
            </div>
          </div>
        ))}

          {aboutData.slice(1, 2).map((about, i) => (
            <div key={i} className='grid grid-cols-4 gap-x-4'>
              {about.statsData.map((item, i) => (
                <ProjectStats key={i} data={item} isFirst={i === 0} />
              ))}
            </div>
          ))}
      </div>
    </main>
  )
}

export default About