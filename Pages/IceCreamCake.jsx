import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/cake.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';


const IceCreamCake = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Pastry');
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


const tabs = ['Pastry', '500ml', '1000ml'];

const Pastry = [
    { name: 'Black Forest (Havmor)', price: 120},
    { name: 'Golden Fantasy (Havmor)', price: 120}
]; 

const ml500 = [
    { name: 'Butter Scotch Cookie (Havmor)', price: 260},
    { name: 'Red Velvet (Vadilal)', price: 300},
    { name: 'Golden Fantasy (Vadilal)', price: 320},
    { name: 'Chocolate (Havmor)', price: 320},
    { name: 'Italian Cassata (Vadilal)', price: 340},
    { name: 'American Nuts (Vadilal)', price: 340},
    { name: 'Mud Cake (Havmor)', price: 350}
];

const ml1000 = [
    { name: 'Black Forest (Havmor)', price: 620},
    { name: 'Golden Fantasy (Havmor)', price: 620},
    { name: 'Heart Beat( Havmor)', price: 0},
    { name: 'Chocolate Fantasy (Havmor)', price: 0},
    { name: 'American Nuts (Havmor)', price: 0}
];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


const commonLayout = (items) => (
    <div className="cake-table">
      {items.map((item, index) => (
        <div className="cake-row" key={index}>
          <div className="cake-name">{item.name}</div>
          <div className="cake-price">{item.price}</div>
        </div>
      ))}
    </div>
  );


 return (
    <div className="cake-container">
      {/* Top Wave and Title */}
      <div className="top-section">
        <img src={topwave} alt="Top Wave" className="top-wave" />
        <h2 className="cake-title">ICECREAM CAKE</h2>
      </div>

      {/* Tabs */}
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'Pastry' && commonLayout(Pastry)}
        {activeTab === '500ml' && commonLayout(ml500)}
        {activeTab === '1000ml' && commonLayout(ml1000)}
        {!['Pastry', '500ml', '1000ml'].includes(activeTab) && (
          <p className="coming-soon">{activeTab} Items coming soon...</p>
        )}
      </div>

      {/* Bottom Wave + Menu Icon */}
      <div className="bottom-wave-menu">
        <img src={wave} alt="Wave" className="bottom-wave" />
        <div
          className="menu-wrapper"
          onClick={() => navigate('/home', { state: { scrollToMenu: true } })}
          style={{ cursor: 'pointer' }}
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

export default IceCreamCake;
