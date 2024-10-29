import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'

const Home = () => {
  return (
    <main>
      {/* <Navbar/> */}
      <Hero/>
      <About/>
      <Services/>
      <Clients/>
    </main>
  )
}

export default Home