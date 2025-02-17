
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './componets/header/header'
import Home from './pages/home/index'
import AboutUs from './pages/about/about'
import Cart from './pages/cart/cart'
import Deatils from './componets/Details'
import Products from './pages/product'
import Footer from './componets/footer/footer'
import Login from './pages/login'
import SignUp from './pages/signup'
import OTP from './pages/otp'
import ErrorPage from './pages/404error'
import ThankYou from './pages/thankYou'
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>} />
        <Route exact={true} path='/about' element={<AboutUs/>} />
        <Route exact={true} path='/cart' element={<Cart/>} />
        <Route exact={true} path='/products/details' element={<Deatils/>} />
        <Route exact={true} path='/products' element={<Products/>} />
        <Route exact={true} path='/login' element={<Login/>} />
        <Route exact={true} path='/signup' element={<SignUp/>} />
        <Route exact={true} path='/otp' element={<OTP/>} />
        <Route exact={true} path='/404-error' element={<ErrorPage/>} />
        <Route exact={true} path='/thankyou' element={<ThankYou/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
