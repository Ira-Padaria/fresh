import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import lottegroup from '../assets/lottewave.png';
import '../styles/lotte.css';

const LotteGroup =  () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('World Cone');
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

  const tabs = ['World Cone', 'Krunch Candy'];

    const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const WorldCone = [
    { name: 'Swiss Choco Brownie(havmor)', price: 90},
    { name: 'Double Belgiane Chocolate(havmor)', price: 100}
  ];

  const KrunchCandy = [
    { name: 'Yoghurt Krunch Berry', price: 60},
    { name: 'Choco Krunch Vanilla', price: 60}
  ];

    const commonLayout = (items) => (
    <div className="Lotte-table">
      {items.map((item, index) => (
        <div className="Lotte-row" key={index}>
          <div className="Lotte-name">{item.name}</div>
          <div className="Lotte-price">{item.price}</div>
        </div>
      ))}
    </div>
);


return (
    <div className="Lotte-container">
      {/* Top Wave and Title */}
      <div className="top-section">
    <img src={lottegroup} alt="wave" className="brand-wave" />
  <div className="brand-logo-wrapper">
    <img src={require('../assets/Lottegroup.png')} alt="LOTTE GROUP Logo" className="brand-logo" />
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
  {activeTab === 'World Cone' && commonLayout(WorldCone)}
  {activeTab === 'Krunch Candy' && commonLayout(KrunchCandy)}
  {!['World Cone', 'Krunch Candy'].includes(activeTab) && (
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

export default LotteGroup;