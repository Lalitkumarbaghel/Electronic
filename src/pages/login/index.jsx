import React from "react";
import './style.css'
import loginImg from '../../assets/images/electronic.jpg'
import { Link } from "react-router-dom";

const Login = ()=>{
    return (
        <div>

<div className="login_container">
        <div className="cover">
        <div className="front">
            <img src={loginImg} alt="" />
        </div>
        
        </div>
        <div className="forms">
        <p>logo</p>
            <div className="form-content">
            <div className="login-form">
                <div className="title">Login</div>
            <form action="#">
                <div className="input-boxes">
                <div className="input-box">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box">
                <i className="fa-solid fa-lock"></i>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="text"><a href="#">Forgot password?</a></div>
                <div className="button input-box">
                    <input type="submit" value="submit" />
                </div>
                <div className="text sign-up-text">Don't have an account? <Link to='/signup'>Sigup now</Link></div>
                </div>
            </form>
        </div>
            
        </div>
        </div>
    </div>


        </div>
    )
}

export default Login;
