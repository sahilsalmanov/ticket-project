import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'




function Login2() {

    let navigate = useNavigate()

    function toRegister() {
        navigate('/register')
    }
  return (
    <div className="login">
    <div className="form">
      <form noValidate>
        <span>Login</span>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter email id / username"
          className="form-control inp_text"
          id="email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter password"
          className="form-control"
        />

        <button type="submit">Login</button>
        <button onClick={toRegister} style={{ marginTop: '30px' }}>Sign Up</button>
      </form>
    </div>
  </div>
  )
}

export default Login2