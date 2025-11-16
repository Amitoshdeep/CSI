import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <div
      data-scroll-container
      className='mainDiv
      relative font-Poppins bg-gray-300 cursor-default'
      >
      <Navbar/>
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
