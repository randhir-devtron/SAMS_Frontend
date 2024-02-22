
function NavBar() {
    const name = "Randhir Kumar"
    const email = "randhirkumar1062000@gmail.com"
    return (
        <div className="student-navbar">
            <div className="student-navbar-img">
                <img src="../../../public/Randhir.jpeg" alt="Image" className="randhir-image" />
            </div>
            <div className="student-navbar-information">

                <h3>{name}</h3>
                <h5>{email}</h5>
            </div>
            <div className="student-navbar-button">
                <button type='button'>Punch In</button>
                <button type='button'>Punch Out</button>
            </div>
        </div>
    )
}

export default NavBar   