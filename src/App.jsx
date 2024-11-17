import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Whatsapp from './components/Whatsapp';


const App = () => {
  return (
    <main>
      <Whatsapp/>
      {/* <Copyright/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> 
    </main>
  )
}

export default App