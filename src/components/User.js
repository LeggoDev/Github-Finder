import React from 'react'

const User = ({ darkMode, user }) => {

    const reposInfos = [
        {
            key: 'Repos',
            value: user.public_repos
        },
        {
            key: 'Followers',
            value: user.followers
        },
        {
            key: 'Following',
            value: user.following
        }
    ]

    const linksInfos = [
        {
            img: '../../images/pin.svg',
            whiteImg: '../../images/white-pin.svg',
            value: user.location
        },
        {
            img: '../../images/twitter.svg',
            whiteImg: '../../images/white-twitter.svg',
            value: user.twitter_username
        },
        {
            img: '../../images/url.svg',
            whiteImg: '../../images/white-url.svg',
            value: user.blog
        },
        {
            img: '../../images/office-building.svg',
            whiteImg: '../../images/white-office-building.svg',
            value: user.company
        }
    ]

    let date = new Date(user.created_at).toLocaleString("fr-FR", { year: "numeric", month: "short", day: "numeric" })
    const dateSplitted = date.split(" ")
    dateSplitted[1] = dateSplitted[1].slice(0, 1).toUpperCase() + dateSplitted[1].slice(1)
    dateSplitted[1] = dateSplitted[1].slice(0, 3)
    date = dateSplitted.join(' ')

    return (
        <div className='User' style={darkMode ? { backgroundColor: '#1E2A47' } : { backgroundColor: '#FEFEFE', boxShadow: '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)' }}>
            <section className='informations'>
                <img className='avatar' src={user.avatar_url} alt="user avatar" />
                <div className='header'>
                    <section>
                        <h2 style={darkMode ? { color: '#FFFFFF' } : { color: '#2b3442' }}>{user.name}</h2>
                        <span>@{user.login}</span>
                    </section>
                    <span className='date' style={darkMode ? { color: '#FFFFFF' } : { color: '#697C9A' }}>Joined {date}</span>
                </div>
            </section>
            <p className='bio' style={darkMode ? { color: '#FFFFFF' } : { color: '#4b6a9b' }}>{user.bio ? user.bio : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}</p>
            <div className='repos' style={darkMode ? { backgroundColor: '#141d2f' } : { backgroundColor: '#F6F8FF' }}>
                {
                    reposInfos.map((item, index) => (
                        <div key={index} className={index === 1 ? 'm-100' : ''}>
                            <span style={darkMode ? { color: '#FFFFFF' } : { color: '#4b6a9b' }}>{item.key}</span>
                            <p style={darkMode ? { color: '#FFFFFF' } : { color: '#2b3442' }}>{item.value ? item.value : 'Not available'}</p>
                        </div>
                    ))
                }
            </div>
            <div className='links'>
                {linksInfos.map((item, index) => (
                    <div key={index} style={index === 0 || index === 1 ? { marginBottom: '1.25rem' } : {}}>
                        <img src={darkMode ? item.whiteImg : item.img} alt="logo item" />
                        <span className={!item.value && 'low-opacity'} style={darkMode ? { color: '#ffffff' } : { color: '#4b6a9b' }}>{item.value ? item.value : 'Not available'}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default User