import React from 'react'
import { aboutData } from '../constants/constants'
import ProjectStats from './ProjectStats'
import Title from './Title'
import styles from '../styles';

const About = () => {

  // console.log(aboutData)

  return (
    <main className={`w-full bg-darkenBlue text-white ${styles.containerPadding}`} id='about-us'>
      <div className='max-w-7xl mx-auto'>
        {aboutData.slice(0, 1).map((about, i) => (
          <Title key={i} aboutHeader={about.header} aboutTitle={about.title} aboutSubTitle={about.subTitle}/>
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