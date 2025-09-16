import React from 'react';
import { useNavigate } from 'react-router-dom';
import fresh from '../assets/Fresh.png'; // replace with your actual logo path
import { FaInfoCircle } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import topWave from '../assets/topwave.png'; // background wave

import '../styles/header.css';

const Header = () => {
  const navigate = useNavigate();

  return (

    <>
    <div className="header-container">
      <img src={topWave} alt="Top Wave" className="header-wave" />

      <div className="header-content">
        <div className='left-icon'>
            <AiFillHeart 
                className='header-icon'
                title='Wishlist'
                onClick={ () => navigate('/wishlist')}
            />
        </div>

        <div className='center-logo'>
            <img
                src={fresh}
                alt='Fresh'
                className='header-logo'
                onClick={ () => navigate('/')}
            />  
        </div>

        <div className='right-icon'>
            <FaInfoCircle
                className='heder-icon'
                title='About Us'
                onClick={ () => navigate('/about')}
            />
        </div>
      </div>
    </div>
     
    </>
  );
};

export default Header;
