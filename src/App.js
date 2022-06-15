import React, { useState } from 'react'

import Search from './components/Search'
import User from './components/User'

import './App.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className='background' style={darkMode ? { backgroundColor: '#141d2f' } : { backgroundColor: '#f6f8ff' }}>
      <header>
        <h1 style={darkMode ? { color: '#ffffff' } : { color: '#222731' }}>devfinder</h1>
        <section onClick={changeMode}>
          <span className='mode-title' style={darkMode ? { color: '#FFFFFF' } : { color: '#697C9A' }}>{darkMode ? 'Light' : 'Dark'}</span>
          <img className='mode-image' src={darkMode ? 'images/mode/sun.svg' : 'images/mode/moon.svg'} alt="mode-img" />
        </section>
      </header>
      <Search darkMode={darkMode} />
      <User darkMode={darkMode} />
    </div>
  );
}

export default App;
