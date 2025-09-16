import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import hajoorisKulfi from "../assets/hajooriwave.png";
import '../styles/hajoori.css';

const Hajoorikulfi =  () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Fruit Kulfi');
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

  const tabs = ['Fruit Kulfi', 'Dryfruit Kulfi'];

    const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const Fruitkulfi= [
    { name: 'Fresh Jamun Shot', price: 50}
  ];

  const Dryfruitkulfi = [
    { name: 'Shahi Dryfruit', price: 50},
    { name: 'Kesar Pista', price: 50}
  ];
    const commonLayout = (items) => (
    <div className="Hajoori-table">
      {items.map((item, index) => (
        <div className="Hajoori-row" key={index}>
          <div className="Hajoori-name">{item.name}</div>
          <div className="Hajoori-price">{item.price}</div>
        </div>
      ))}
    </div>
);


return (
    <div className="Hajoori-container">
      {/* Top Wave and Title */}
      <div className="top-section">
    <img src={hajoorisKulfi} alt="wave" className="brand-wave" />
  <div className="brand-logo-wrapper">
    <img src={require('../assets/HajooriKulfi.png')} alt="HAJOORI Logo" className="brand-logo" />
  </div>
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
  {activeTab === 'Fruit Kulfi' && commonLayout(Fruitkulfi)}
  {activeTab === 'Dryfruit Kulfi' && commonLayout(Dryfruitkulfi)}
  {!['Fruit Kulfi', 'Dryfruit Kulfi'].includes(activeTab) && (
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

export default Hajoorikulfi;