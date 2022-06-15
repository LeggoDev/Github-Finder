import React from 'react'

const Search = ({ darkMode }) => {
    return (
        <div className='Search' style={darkMode ? { backgroundColor: '#1E2A47' } : { backgroundColor: '#FEFEFE', boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)' }}>
            <section>
                <img src="../../images/search.svg" alt="search-icon" />
                <span style={darkMode ? { color: '#ffffff' } : { color: '#4B6A9B' }}>Search GitHub username…</span>
            </section>
            <button>Search</button>
        </div>
    )
}

export default Search