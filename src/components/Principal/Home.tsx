// import { useState } from 'react'
import { useState } from 'react'
import '../../App.css'
// import { useState } from 'react'
// import React from 'react'
import Users from '../Users'
import PrincipalModal from './PrincipalModal'
function Home() {
    const [modalFlag, SetModalFlag] = useState(false);
    function handleClick() {
        SetModalFlag(true);
    }

    return <div className="Home">
        <div className="home-header">
            <input type="text" placeholder='Search...' className='search' />
            <button className='modal-button' onClick={handleClick}>Add Student</button>
        </div>
        {modalFlag && <PrincipalModal SetModalFlag={SetModalFlag} />}
        <table className='table'>
            <colgroup>
                <col span={3} />
            </colgroup>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Qualification</th>
            </tr>
            {Users.map((user) => (
                <tr className='listItem'>
                    <td>{user.id}</td>
                    <td>{user.firstname + " " + user.lastname}</td>
                    <td>{user.Qualification}</td>
                </tr>
            ))}
        </table>
        {/* <input type="text" placeholder='Search...' className='search' />
        <ul className='list'>
            {Users.map((user) => (
                <li className='listItem'>{user.firstname}</li>
            ))}
        </ul> */}
    </div>
}

export default Home