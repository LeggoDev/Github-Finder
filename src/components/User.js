import React from 'react'

const User = ({ darkMode }) => {
    return (
        <div className='User' style={darkMode ? { backgroundColor: '#1E2A47' } : { backgroundColor: '#FEFEFE', boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)' }}>User</div>
    )
}

export default User