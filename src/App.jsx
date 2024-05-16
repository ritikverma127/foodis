import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart/Cart'
import Offer from './Offer/Offer'
import SignIn from './SignIn/SignIn'
import Login from './SignIn/Login'
import Help from './Help/Help'
import Home from './Home/Home'
// import './App.css'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Offer' element={<Offer/>}/>
        <Route path='/Signin' element={<SignIn/>}/>
        <Route path='/Help' element={<Help/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
    </div>
  )
}

export default App
