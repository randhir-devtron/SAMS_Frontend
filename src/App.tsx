
import './App.css'
import Login from './components/Login'
import Home from './components/Principal/Home'
import StudentHome from './components/Student/StudentHome'
import NavBar from './components/Student/NavBar'
import CalendarStudent from './components/Student/CalendarStudent'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/login/principal" element={<div className="home1">
          <Home />
        </div>}>
        </Route>
        <Route path="/login" element={<div className='login-page1'>
          <Login />
        </div>}>

        </Route>
        <Route path="/login/student" element={
          <>
            <NavBar />
            <StudentHome />
            <div className="calendar-student">
              <CalendarStudent />
            </div></>}>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
