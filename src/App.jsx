import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import GettingStarted from './Pages/GettingStarted'
import Services from './Pages/Services'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import TopNav from './Components/TopNav'

function App() {

  return (
    <div className='font-kanit'>
      <Router>
      <div className='hidden sm:flex w-full '>
      <TopNav/>
      </div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
      <Analytics/>
    </div>
  )
}

export default App
