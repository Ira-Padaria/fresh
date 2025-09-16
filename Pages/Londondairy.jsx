import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import londowave from "../assets/londowave.png";
import '../styles/londondairy.css';

const LondonDairy = () => {
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

  const tabs = ['Cups', 'Tub', 'Candy'];


    const handleTabClick = (tab) => {
    setActiveTab(tab);
};


    const Cups = [
        { name: 'Pralines & Cream', price: 150},
        { name: 'Cookies & Cream', price: 150},
        { name: 'Double Chocolate', price: 150}
    ];

    const Candy = [
        { name: 'Blueberry Sorbet', price: 60},
        { name: 'Pink Guava Sorbet', price: 60},
        { name: 'Pina Colada Sorbet', price: 60},
        { name: 'Peach Apricot Sorbet', price: 60},
        { name: 'Raspberry Sorbet', price: 150},
        { name: 'Mango Sorbet', price: 150},
        { name: 'Berries N Cream', price: 150},
        { name: 'Belgian Chocolate', price: 150},
        { name: 'Hazelnut', price: 150},
        { name: 'Almond', price: 150}
    ];

    const Tub = [
        { name: 'Double Chocolate (500ml Tab)', price: 150},
        { name: 'Chocolate Hazelnut (500ml Tab)', price: 150},
        { name: 'Coconutello (500ml Tab)', price: 150},
        { name: 'Lite Chocolate(Sugar free)(500ml Tab)', price: 150}
    ];  
    
    const commonLayout = (items) => (
    <div className="ld-table">
      {items.map((item, index) => (
        <div className="ld-row" key={index}>
          <div className="ld-name">{item.name}</div>
          <div className="ld-price">{item.price}</div>
        </div>
      ))}
    </div>
);

return (
    <div className="ld-container">
      {/* Top Wave and Title */}
      <div className="top-section">
  <img src={londowave} alt="wave" className="brand-wave" />
  <div className="brand-logo-wrapper">
    <img src={require('../assets/Londondairy.png')} alt="LD Logo" className="brand-logo" />
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
  {activeTab === 'Tub' && commonLayout(Tub)}
  {activeTab === 'Candy' && commonLayout(Candy)}
  {!['Cups', 'Tub', 'Candy'].includes(activeTab) && (
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

export default LondonDairy;