// import { useState } from 'react'
import '../App.css'
// import { useState } from 'react'
// import React from 'react'
import Users from './Users'

function Home() {
    
    return <div className="Home">
        <input type="text" placeholder='Search...' className='search' />
        <ul className='list'>
            {Users.map((user) => (
                <li className='listItem'>{user.firstname}</li>
            ))}
        </ul>
    </div>
}

export default Home