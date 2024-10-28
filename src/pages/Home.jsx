import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default Home