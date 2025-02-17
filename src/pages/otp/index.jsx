import React from "react";
import './style.css'
import { useState } from "react";
const OTP = ()=>{
    const [maxLe , setMaxLe] = useState(1);
    return (
        <div>
            <div className="otp-container">
                <h3>Register</h3>
                <p>Your code was sent to you via email</p>
                <div className="d-flex justify-content-center">
                    <input type="text" className="otp-input form-control" maxLength={maxLe} />
                    <input type="text" className="otp-input form-control" maxLength={maxLe} />
                    <input type="text" className="otp-input form-control" maxLength={maxLe} />
                    <input type="text" className="otp-input form-control" maxLength={maxLe} />
                    <input type="text" className="otp-input form-control" maxLength={maxLe} />
                </div>
                <button className="btn-verify">Verify</button>

                <p className="mt-2">Didn't receive code? <a href="#" className="text-primary">Request again</a></p>
            </div>
        </div>
    )
}
export default OTP;