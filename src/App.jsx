import React from 'react';
import {Routes, Route} from 'react-router-dom';

// My imports
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <div
      data-scroll-container
      className='mainDiv
      '
    >
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
