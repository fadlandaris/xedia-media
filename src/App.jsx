import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'



const App = () => {
  return (
    <main>
      {/* <Copyright/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes> 
    </main>
  )
}

export default App