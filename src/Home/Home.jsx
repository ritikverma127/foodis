import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Foods from './Foods'
import Footer from './Footer'
import Demo from '../Demo'
function Home() {
  const [first, setfirst] = useState(false)
  function Clicked(){
    setfirst(pre=>!pre);
  }

  return (
    <div>
       <Navbar/>
       <button onClick={Clicked}>Clicked</button>
       {first ? <Demo key="demo" /> : null}
     <Foods/>
    <Footer/>

        </div>
  )
}

export default Home
