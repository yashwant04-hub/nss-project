import React , { useState} from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom';
import image3 from '../../assets/image3.png'
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    // Basic validation
    if (email && password) {
       
      // Add actual login logic here
      axios.post('http://localhost:3000/Login', { email:email , password:password })
      .then((result) =>  console.log('Login attempted', { email:email, password:password }))
      .catch((error) => console.log(error))
    
    } else {
      alert('Please enter both email and password');
    }

    
  };

  return (
  <div className="login_main">
      <div className="login-container">


      <div className="login_container_left">
        <div className="login_image">
          <img src={image3} alt="login_image" />
        </div>
      </div>


      <div className="login_container_right">
      <form onSubmit={handleSubmit} className="login-form">
      <h2>Welcome!</h2>
      <div className="loginform_text">
        Get access to thousands of questions and live tests with detailed analysis
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="login-button">
        <NavLink className="login_navlink" to="/Dashboard">
          Sign In
        </NavLink>
      </button>
      <div className="new_account">
      <p>Don't have an account? <NavLink className="login_navlink1" to="/Home">Sign Up</NavLink></p>
    </div>
    </form>

      </div>
    </div>
  </div>
  )
}

export default Login;