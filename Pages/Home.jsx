import React, {useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'; // Reusing login-container style
import logo from '../assets/Logo.png';
import wave from '../assets/wave.png';
import menuIcon from '../assets/menu_icon.png';
import rectangle from '../assets/rectangle.png';
import Header from '../components/Header';
import '../styles/header.css';
import Carousel from '../components/Carousel';
import menuData from '../data/menuData.js';
import Menu from '../Pages/Menu.jsx';
import '../styles/menu.css'
import BrandSection from '../components/BrandSection.jsx';


const Home = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  // const scrollRef = useRef();

  const handleMenuClick = () => {
    // navigate('/menu'); // ✅ redirect to menu page
    menuRef.current?.scrollIntoView({ behavior: 'smooth'});
  };

  const BottomMenu = () => {
    const navigate = useNavigate();
  }

  return (
    <div className="home-container"> {/* Reusing login-container style */}
    <Header />

    <div className='carousel-wrapper'>
    <Carousel />
    </div>

    <div className='home'>
      <h2 className='grid-title'>Our Menu</h2>
      <Menu />
    </div>    
      <div className="bottom-section">
        <img src={wave} alt="Wave" className="wave-img" />

        <div className="bottom-menu" onClick={handleMenuClick} style={{ cursor: 'pointer' }}>
          <div className="rectangle-menu-img">
            <img src={rectangle} alt="Rectangle" className="rectangle-img" />
            <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
          </div>
          <span className="menu-label"><strong>menu</strong></span>
        </div>
      </div>
    </div>
  );
};

export default Home;
