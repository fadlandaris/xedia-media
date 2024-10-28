import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'

const Home = () => {
  return (
    <main>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Services/>
    </main>
  )
}

export default Home