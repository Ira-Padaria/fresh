import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/badamshake.css'
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const BadamShakeDate = [
    { name: 'Badam Shake', price: 70},
    { name: 'Badam Shake with Ice.', price: 100},
    { name: 'Sp.Badam Shake', price: 130}
];

const BadamShake = () => {
    const navigate = useNavigate();
    return (
        <div className='badamshake-container'>
            <img src={topwave} alt="Top Wave" className="top-wave" />
            <h2 className="badamshake-title">BADAM SHAKE</h2> 

        <div className="menu-list">
        {/* <div className="menu-header">
          <div className="item-name white">Item</div>
          <div className="item-price white">Price</div>
        </div> */}

        {BadamShakeDate.map((item, index) => (
          <div className="menu-row" key={index}>
            <div className="item-name yellow">{item.name}</div>
            <div className="item-price yellow">{item.price}</div>
          </div>
        ))}
      </div>


        <div className="bottom-wave-menu">
                <img src={wave} alt="Wave" className="bottom-wave" />
                <div 
                  className="menu-wrapper" 
                  onClick={() => navigate('/home', { state: { scrollToMenu: true } })}
                  style={{ cursor: 'pointer'}}
                >
                  <div className="menu-icon-box">
                    <img src={rectangle} alt="rect" className="menu-rect" />
                    <img src={menuIcon} alt="icon" className="menu-img" />
                  </div>
                  <p className="menu-text">menu</p>
                </div>
              </div>
            </div>
          );
};

export default BadamShake;