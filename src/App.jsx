
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './componets/header/header'
import Home from './pages/home/index'
import AboutUs from './pages/about/about'
import Cart from './pages/cart/cart'
import Deatils from './componets/Details'
import Footer from './componets/footer/footer'
import Login from './pages/login'
import SignUp from './pages/signup'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>} />
        <Route exact={true} path='/about' element={<AboutUs/>} />
        <Route exact={true} path='/cart' element={<Cart/>} />
        <Route exact={true} path='/products/details' element={<Deatils/>} />
        <Route exact={true} path='/login' element={<Login/>} />
        <Route exact={true} path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
