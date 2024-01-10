import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from './pages/Error404'

function App() {

  return (
    <div className='main-body'>
      <Router>
        <div id='header'>
          <h1>Project One</h1>
        </div>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <div id='footer'>
          <p>Created by Pinaki Jha, 2024</p>
          <p>Nexus Project 1: Login and Signup Page (Front-end Alone)</p>
        </div>
      </Router>
    </div>

      )
}

export default App
