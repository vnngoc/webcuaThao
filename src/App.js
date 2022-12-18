import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Hello from './components/Hello';
import Audio from './components/Audio';
import Audioo from './components/Audio2';
function App() {
  
  return (
      <div className='Container'>
      <Router>
      <Header/>
        <Routes >
          <Route path='/Hello' element={<Hello />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/audio' element={<Audio />} />
          <Route path='/audio2' element={<Audioo />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;