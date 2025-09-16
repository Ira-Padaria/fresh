import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/kingcone.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';


const Kingcone = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const tabRefs = useRef({});
  useEffect(() => {
  if (tabRefs.current[activeTab]) {
    tabRefs.current[activeTab].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }
}, [activeTab]);


const tabs = ['All', 'Fruit', 'DryFruit'];

const handleTabClick = (tab) => {
    setActiveTab(tab);
};

const All = [
    { name: 'Mini Butter Scotch (Havmor)', price: 20},
    { name: 'Butter Scotch (Havmor)', price: 30},
    { name: 'Black Currant (Vadilal)', price: 35},
    { name: 'Chocolate (Havmor)', price: 40},
    { name: 'Choco Brownie (Havmor)', price: 40},
    { name: 'Strawberry (Havmor)', price: 40},
    { name: 'Keasr Pista (Havmor)', price: 50},
    { name: 'American Nuts (Vadilal)', price: 50},
    { name: 'Dark Chocolate (Havmor)', price: 50},
    { name: 'Oero Cornetto (KW)', price: 60},
    { name: 'Chokissimo Cornetto (KW)', price: 60},
    { name: 'Choco Block (Havmor)', price: 99},
    { name: 'Swiss Choco Brownie (Havmor)', price: 100},
    { name: 'Double Belgiane Chocolate (Havmor)', price: 100}
];

const Fruit = [
    { name: 'Strawberry (Havmor)', price: 40},
    { name: 'Black Currant (Vadilal)', price: 35}
];

const DryFruit = [
    { name: 'Mini Butter Scotch (Havmor)', price: 20},
    { name: 'Butter Scotch (Havmor)', price: 30},
    { name: 'Keasr Pista (Havmor)', price: 50},
    { name: 'American Nuts (Vadilal)', price: 50}
];

const commonLayout = (items) => (
    <div className="kingcone-table">
      {items.map((item, index) => (
        <div className="kingcone-row" key={index}>
          <div className="kingcone-name">{item.name}</div>
          <div className="kingcone-price">{item.price}</div>
        </div>
      ))}
    </div>
);


return (
    <div className='kingcone-container'>
        <div className='top-section'>
            <img src={topwave} alt='Top Wave' className='top-wave' />
            <h2 className='kingcone-title'>KINGCONE</h2>
        </div>
            <div className="tab-bar">
        {tabs.map((tab) => (
            <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)} // store reference
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
            >
            {tab}
            </button>
        ))}
        </div>

              <div className="tab-content">
                {activeTab === 'All' && commonLayout(All)}
                {activeTab === 'Fruit' && commonLayout(Fruit)}
                {activeTab === 'DryFruit' && commonLayout(DryFruit)}
                {activeTab !== 'All' && activeTab !== 'Fruit' && activeTab !== 'DryFruit' && (
                  <p className="coming-soon">{activeTab} Items coming soon...</p>
                )}
              </div>
        
              {/* Bottom Wave + Menu Icon */}
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

export default Kingcone;
