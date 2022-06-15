import React, { useState } from 'react'

import users from '../data.json'

const Search = ({ darkMode, sendUserName }) => {

    const [username, setUsername] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (users.find(user => user.name === username)) {
            sendUserName(username)
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='Search' style={darkMode ? { backgroundColor: '#1E2A47' } : { backgroundColor: '#FEFEFE', boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)' }}>
            <section>
                <div>
                    <label htmlFor="search">
                        <img src="../../images/search.svg" alt="search-icon" />
                    </label>
                    <input className={darkMode ? 'text-white' : 'text-dark'} style={darkMode ? { color: '#ffffff', background: 'transparent' } : { color: '#222731' }} type='text' placeholder='Search GitHub username…' value={username} id='search' onChange={(e) => setUsername(e.target.value)} />
                </div>
                {error && <p className='error'>No result</p>}
            </section>
            <input type='submit' value='Search' />
        </form>
    )
}

export default Search