import React, { useEffect } from 'react';
import { aboutData } from '../constants/constants';
import ProjectStats from './ProjectStats';
import Title from './Title';
import styles from '../styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Graphic from './Graphic';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      once: true, // Animate only once
    });
  }, []);

  return (
    <main
      className={`w-full text-white ${styles.containerPadding} ${styles.colorGradient}`}
      id="about-us"
    >
    <Graphic/>
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        {aboutData.slice(0, 1).map((about, i) => (
          <Title key={i} aboutHeader={about.header} aboutTitle={about.title} aboutSubTitle={about.subTitle} />
        ))}

        {aboutData.slice(1, 2).map((about, i) => (
          <div key={i} className="grid grid-cols-2 md:grid-cols-4 gap-4 border-2 rounded-2xl border-dashed p-2">
            {about.statsData.map((item, i) => (
              <ProjectStats key={i} data={item} isFirst={i === 0} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
