import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/milkshake.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const Milkshake = () => {
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

const tabs = ['All', 'Dryfruit', 'Choco Fansty', 'Special Dairy Fresh'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

const All = [
    { name: 'Strawberry', price: 90},
    { name: 'Pineapple', price: 90},
    { name: 'Mango', price: 90},
    { name: 'Chocolate', price: 90},
    { name: 'Chickoo (Organic)', price: 100},
    { name: 'Kaju Anjeer', price: 140},
    { name: 'Kaju Draksh', price: 140},
    { name: 'Janu Badam', price: 140},
    { name: 'Kaju Gulkand', price: 140},
    { name: 'Kaju Mango', price: 140},
    { name: 'Badam anjeer', price: 140},
    { name: 'Kaju Chocolate', price: 140},
    { name: 'Kaju Strawberry', price: 140},
    { name: 'Oero', price: 140},
    { name: 'Sp.Kaju', price: 150},
    { name: 'Kaju Badam Anjeer', price: 150},
    { name: 'Kitkat', price: 150},
    { name: 'Kaju Badam Pista', price: 160},
    { name: 'Roasted Almonds', price: 160},
    { name: 'Roasted Almonds Chocolate', price: 180},
    { name: 'Roasted Almonds Anjeer', price: 180},
    { name: 'Sp.Dryfruit', price: 180},
    { name: 'Sp.Dairy Fresh', price: 200},
];

const Dryfruit = [
    { name: 'Kaju Anjeer', price: 140},
    { name: 'Kaju Draksh', price: 140},
    { name: 'Janu Badam', price: 140},
    { name: 'Kaju Gulkand', price: 140},
    { name: 'Kaju Mango', price: 140},
    { name: 'Badam anjeer', price: 140},
    { name: 'Kaju Chocolate', price: 140},
    { name: 'Kaju Strawberry', price: 140},
    { name: 'Sp.Kaju', price: 150},
    { name: 'Kaju Badam Anjeer', price: 150},
    { name: 'Kaju Badam Pista', price: 160},
    { name: 'Roasted Almonds', price: 160},
    { name: 'Roasted Almonds Chocolate', price: 180},
    { name: 'Roasted Almonds Anjeer', price: 180}
]; 

const ChocoFansty = [
    { name: 'Chocolate', price: 90}, 
    { name: 'Oreo', price: 140},
    { name: 'Kaju Chocolate', price: 140},
    { name: 'Kitkat', price: 150},
    { name: 'Roasted Almonds Chocolate', price: 180}
];

const specialdairyfresh = [
    { name: 'Sp.Dairy Fresh', price: 200},
    { name: 'Sp.Kaju', price: 180},
    { name: 'Sp.Dryfruit', price: 180},
    { name: 'Roasted Almonds Chocolate', price: 180},
    { name: 'Roasted Almonds Anjeer', price: 180},
    { name: 'Roasted Almonds', price: 160}
];

const commonLayout = (items) => (
    <div className="cup-table">
      {items.map((item, index) => (
        <div className="cup-row" key={index}>
          <div className="cup-name">{item.name}</div>
          <div className="cup-price">{item.price}</div>
        </div>
      ))}
    </div>
);

return (
    <div className="milkshake-container">
      {/* Top Wave and Title */}
      <div className="top-section">
        <img src={topwave} alt="Top Wave" className="top-wave" />
        <h2 className="milkshake-title">MILKSHAKE</h2>
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
        {activeTab === 'All' && commonLayout(All)}
        {activeTab === 'Dryfruit' && commonLayout(Dryfruit)}
        {activeTab === 'Choco Fansty' && commonLayout(ChocoFansty)}
        {activeTab === 'Special Dairy Fresh' && commonLayout(specialdairyfresh)}
        {!['All', 'Dryfruit', 'Choco Fansty', 'Special Dairy Fresh'].includes(activeTab) && (
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

export default Milkshake;
