import React from 'react'
import './Css/logins.css'

function LginSignup() {
  return (
    <div className="container">
        <form className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label for="username">Username</label>
                <input type="text" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="text" />
            </div>
            <button type="submit">Login</button>
            <p className="message">Not registered? <a href="#">Create an account</a></p>
        </form>
    </div>
  )
}

export default LginSignup
