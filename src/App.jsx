import React from 'react'
import Home from './components/Home'
import Pricing from './components/Pricing'
import Uploads from './components/Uploads'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
const App = () => {
  return (
    <div className='h-screen w-screen bg-center bg-cover overflow-hidden' style={{ backgroundImage: "url('/kk.png')" }}  >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
    <Nav/>
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/pricing' element = {<Pricing/>}/>
      <Route path = '/uploads' element = {<Uploads/>}/>
    </Routes>

    </div>
  )
}

export default App