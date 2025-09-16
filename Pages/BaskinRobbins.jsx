import React, { useEffect, useRef, useState } from "react";
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import { useNavigate } from "react-router-dom";
import baskinwave from "../assets/baskinwave.png";
import '../styles/baskinrobbins.css';

const Baskinrobbin = () => {
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

  const tabs = ['Cups', 'Candy'];

    const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const Cups = [
    { name: 'Verry Berry Strawberry', price: 70},
    { name: 'Aplhonso Mango', price: 85},
    { name: 'Dtuch Chocolate', price: 85},
    { name: 'Cotton Candy', price: 85},
    { name: 'Honey Nut Crunch', price: 95},
    { name: 'Mississippi Mud', price: 98},
    { name: 'Fruit Overload Sundae', price: 135},
    { name: 'Mississppi Mud Sundae', price: 135}
  ];

  const Candy = [
    { name: 'Cotton Candy', price: 80}
  ];

  const commonLayout = (items) => (
    <div className="br-table">
      {items.map((item, index) => (
        <div className="br-row" key={index}>
          <div className="br-name">{item.name}</div>
          <div className="br-price">{item.price}</div>
        </div>
      ))}
    </div>
);

  return (
      <div className="br-container">
        {/* Top Wave and Title */}
        <div className="top-section">
    <img src={baskinwave} alt="wave" className="brand-wave" />
    <div className="brand-logo-wrapper">
      <img src={require('../assets/baskinrobbins.png')} alt="BR Logo" className="brand-logo" />
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
    {activeTab === 'Candy' && commonLayout(Candy)}
    {!['Cups', 'Candy'].includes(activeTab) && (
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

export default Baskinrobbin;