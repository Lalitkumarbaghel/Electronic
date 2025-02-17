import React from "react";
import './style.css'
import loginImg from '../../assets/images/electronic.jpg'
import { Link } from "react-router-dom";

const SignUp = ()=>{
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
                    <i className="fa-solid fa-user"></i>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Enter your password" />
                </div>
                <div className="text-center">
                    <button className="button input-box" style={{border:"none",background:"transparent"}}>
                    <a href="otp.html" className="btn btn-primary btn-lg w-100" >Request OTP</a>
                </button>
                </div>
                
                
                
                <div className="text sign-up-text">Already have an account? <Link to='/login'>Login now</Link></div>
                </div>
        </form>
        </div>
            
        </div>
        </div>
    </div>


        </div>
    )
}

export default SignUp;
