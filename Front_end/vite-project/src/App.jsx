import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Components/Search'
import About from './Pages/About'
import Tour from './Pages/Tour'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/tour' element={<Tour/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
