import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import GettingStarted from './Pages/GettingStarted'
import Services from './Pages/Services'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gettingstarted" element={<GettingStarted />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Analytics/>
    </div>
  )
}

export default App
