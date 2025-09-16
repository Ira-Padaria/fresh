import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import havmor from "../assets/havmorwave.png";
import '../styles/havmor.css';

const Havmor =  () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Cone');
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

  const tabs = ['Cone', 'Candy', 'Cup', 'Tub'];

    const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const Cone = [
    { name: 'Mini Butter Scotch', price: 20},
    { name: 'Butter Stoch', price: 30},
    { name: 'Chocolate', price: 40},
    { name: 'Choco Brownie', price: 40},
    { name: 'Strawberry', price: 40},
    { name: 'Kesar Pista', price: 50},
    { name: 'Dark Chocolate', price: 50},
    { name: 'Choco Black', price: 100}
  ];

  const Candy = [
    { name: 'Chocobar', price: 20},
    { name: 'Mango Dolly', price: 20},
    { name: 'Raspberry Dolly', price: 20},
    { name: 'Shahi Pista Kulfi', price: 25},
    { name: 'Bombay Kulfi(Mawa malai)', price: 25},
    { name: 'Crunchy Chocobar', price: 30},
    { name: 'Rabhog', price: 30},
    { name: 'Chowpati Kulfi(Mawa Malai)', price: 40},
    { name: 'Zulubar', price: 50},
    { name: 'Zulubar Dark Chocolate', price: 50},
    { name: 'Mango Magic', price: 60},
    { name: 'Almond Mocha', price: 60},
    { name: 'Wild Berries', price: 60},
    { name: 'Orange Bar', price: 10}
  ];

  const Cup = [
    { name: 'Vanilla', price: 25},
    { name: 'American Nuts', price: 30},
    { name: 'Matka Kulfi', price: 60},
    { name: 'Nutty Belgian Dark Chocolate', price: 60}
  ];

  const Tub = [
    { name: 'Nutty Belgian Dark Chocolate (700ml Tab)', price: 150},
    { name: 'Dry fruits Malai (700ml Tab)', price: 150},
    { name: 'Biscotti (700ml Tab)', price: 150},
    { name: 'Mocha Browine Fudge(700ml Tab)', price: 150},
    { name: 'Taj Mahal(700ml Tab)', price: 150},
    { name: 'Shahi Kesar(700ml Tab)', price: 150},
    { name: 'Rajwadi Kulfi Faluda(700ml Tab)', price: 150},
    { name: 'Almond Carnival(700mlPack 1+1)', price: 150},
    { name: 'Chocolate Chips(700mlPack 1+1)', price: 150},
    { name: 'Vanilla(700mlPack 1+1)', price: 150},
    { name: 'American Nuts(700mlPack 1+1)', price: 150},
  ];

    const commonLayout = (items) => (
    <div className="Havmor-table">
      {items.map((item, index) => (
        <div className="Havmor-row" key={index}>
          <div className="Havmor-name">{item.name}</div>
          <div className="Havmor-price">{item.price}</div>
        </div>
      ))}
    </div>
);


return (
    <div className="Havmor-container">
      {/* Top Wave and Title */}
      <div className="top-section">
    <img src={havmor} alt="wave" className="brand-wave" />
  <div className="brand-logo-wrapper">
    <img src={require('../assets/Havmor.png')} alt="HAVMOR Logo" className="brand-logo" />
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
  {activeTab === 'Cone' && commonLayout(Cone)}
  {activeTab === 'Candy' && commonLayout(Candy)}
  {activeTab === 'Cup' && commonLayout(Cup)}
  {activeTab === 'Tub' && commonLayout(Tub)}
  {!['Cone', 'Candy', 'Cup', 'Tub'].includes(activeTab) && (
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

export default Havmor;