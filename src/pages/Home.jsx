import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Portofolio from '../components/Portofolio'
import Location from '../components/Location'
import styles from '../styles'


const Home = () => {
  return (
    <main className={`pt-10 ${styles.colorGradient}`}>
      <Navbar/>
      <Hero/>
      <About />
      <Services />
      <Clients />
      <Portofolio/>
      <Location/>
      {/* <Footer/> */}
    </main>
  )
}

export default Home