import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import navigation
import '../styles/login.css';
import loginLogo from '../assets/Loginlogo.png';
import wave from '../assets/wave.png';
import menuIcon from '../assets/menu_icon.png';
import rectangle from '../assets/rectangle.png';
import topwave from '../assets/topwave.png';

const Login = () => {
  const navigate = useNavigate(); // initialize navigation
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation if needed
    if (username && mobile) {
      navigate('/home'); // redirect to Home page
    } else {
      alert('Please fill in both fields!');
    }
  };

  return (
    <div className="login-container">
        <img src={topwave} alt='Top Wave' className='top-wave' />
      <img src={loginLogo} alt="Logo" className="login-logo" />

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
        />
        <button type="submit">Login</button>
      </form>

      <div className="bottom-section">
        <img src={wave} alt="Wave" className="wave-img" />

        {/* <div className="bottom-menu">
          <div className="rectangle-menu-img">
            <img src={rectangle} alt="Rectangle" className="rectangle-img" />
            <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
          </div>
          <span className="menu-label"><strong>menu</strong></span>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
