import {  Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Cart from '../Cart/Cart'
import Offer from '../Offer/Offer'
function Link() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Offer' element={<Offer/>}/>
    </Routes>
      
    </div>
  )
}

export default Link;