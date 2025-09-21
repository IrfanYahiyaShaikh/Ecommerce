import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h>Sign Up</h>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <input type='password' placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id=''/>
          <p>You are agree to term & condition</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
