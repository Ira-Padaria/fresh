import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/drink.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const EnergydrinkData = [
    { name: 'Red Bull', price: 130},
    { name: 'Hell', price: 65}
]; 

const EnergyDrink = () => {
    const navigate = useNavigate();
    return (
        <div className='energydrink-container'>
            <img src={topwave} alt="Top Wave" className="top-wave" />
            <h2 className="energydrink-title">ENERGY DRINK</h2> 

        <div className="menu-list">
        {/* <div className="menu-header">
          <div className="item-name white">Item</div>
          <div className="item-price white">Price</div>
        </div> */}

        {EnergydrinkData.map((item, index) => (
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

export default EnergyDrink;