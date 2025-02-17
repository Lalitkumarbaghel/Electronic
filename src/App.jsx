
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './componets/header/header'
import Home from './pages/home/index'
import AboutUs from './pages/about/about'
import Cart from './pages/cart/cart'
import Deatils from './componets/Details'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>} />
        <Route exact={true} path='/about' element={<AboutUs/>} />
        <Route exact={true} path='/cart' element={<Cart/>} />
        <Route exact={true} path='/products/details' element={<Deatils/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
