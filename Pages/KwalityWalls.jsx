import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import kwalitywalls from '../assets/kwalitywave.png';
import '../styles/kwality.css';

const KwalityWalls =  () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Cups');
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

  const tabs = ['Cups', 'Cone', 'Tub', 'Candy'];

    const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const Cups = [
    { name: 'Oero Cornetto', price: 60},
    { name: 'Chokissimo Cornetto', price: 60},
  ];

  const Cone = [
    { name: 'Black Currant', price: 35},
    { name: 'American Nuts', price: 50}
  ];

  const Tub = [
    { name: 'Fruit & Nut(750ml Tab)', price: 150},
    { name: 'Cadbury Crackle (750ml Tab)', price: 150}
  ];
    const Candy = [
    { name: 'Feast', price: 60},
  ];

    const commonLayout = (items) => (
    <div className="Kwality-table">
      {items.map((item, index) => (
        <div className="Kwality-row" key={index}>
          <div className="Kwality-name">{item.name}</div>
          <div className="Kwality-price">{item.price}</div>
        </div>
      ))}
    </div>
);


return (
    <div className="Vadilal-container">
      {/* Top Wave and Title */}
      <div className="top-section">
    <img src={kwalitywalls} alt="wave" className="brand-wave" />
  <div className="brand-logo-wrapper">
    <img src={require('../assets/Kwalitywalls.png')} alt="KWALITY WALLS Logo" className="brand-logo" />
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
  {activeTab === 'Cups' && commonLayout(Cups)}
  {activeTab === 'Cone' && commonLayout(Cone)}
  {activeTab === 'Tub' && commonLayout(Tub)}
  {activeTab === 'Candy' && commonLayout(Candy)}
  {!['Cups', 'Cone', 'Tub', 'Candy'].includes(activeTab) && (
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

export default KwalityWalls;