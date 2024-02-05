import React from 'react';
import { Navbar } from './components/Navbar';
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
const App = () => {
  return (
   <>
   <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
   </div>
   </>
  )
}

export default App