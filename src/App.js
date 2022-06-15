import React, { useState } from 'react'

import Search from './components/Search'
import User from './components/User'

import users from './data.json'

import './App.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(false)
  const [user, setUser] = useState(null)

  const changeMode = () => {
    setDarkMode(!darkMode)
  }

  const sendUserName = (name) => {
    let githubUser = users.find(element => element.name === name)
    setUser(githubUser)
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
      <Search darkMode={darkMode} sendUserName={sendUserName} />
      {user && <User darkMode={darkMode} user={user} />}
    </div>
  );
}

export default App;
