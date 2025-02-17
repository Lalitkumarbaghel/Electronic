// import React from "react";
import axios from 'axios';
import './Header.css'
import { useEffect } from 'react';
import Nav from '../nav/nav';
import { Link } from 'react-router-dom';
const Header = ()=>{
    const countryList = [];
    useEffect(()=>{
        getcountry('https://countriesnow.space/api/v0.1/countries');
    }, [])
    const getcountry = async(url)=>{
        try {
            await axios.get(url).then((res=>{
                if(res!=null){
                    res.data.data.map((item,index)=>{
                        countryList.push(item.country)
                        // console.log(item.country)
                    })
                    
                }
            }))
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar_box">
  <div className="container">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    	<div className="nav_search">
	    	<form className="d-flex" role="search">
		      <input className="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
		      <button className="search_btn" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
		    </form>
	    </div>
      <ul className="navbar-nav navbar_nav">
        <li className="nav-item">
          <Link className="nav-link" to='/login'><span><i className="fa-regular fa-user"></i></span> Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart"><span><i className="fa-solid fa-cart-shopping"></i></span> Cart</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><span><i className="fa-solid fa-store"></i></span> Become a Seller</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* <Nav/> */}
        </ div>
    )
}

export default Header;