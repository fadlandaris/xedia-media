import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Copyright from './components/Copyright';


const App = () => {
  return (
    <main>
      {/* <Copyright/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/our-team' element={<Team/>} />
      </Routes> 
    </main>
  )
}

export default App