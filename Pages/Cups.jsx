import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/cup.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const Cups = () => {
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

  const tabs = ['All', 'DryFruit', 'Chocolate', 'Fruit', 'Sunday', 'SugarFree'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const All = [
    { name: 'Vanilla (Havmor)', price: 25 },
    { name: 'American Nuts (Havmor)', price: 30 },
    { name: 'American Nuts (Vadilal)', price: 35 },
    { name: 'Silk Chocolate (Vadilal)', price: 50 },
    { name: 'Choco Brownie Dip (Vadilal)', price: 50 },
    { name: 'American Mid Pie (Vadilal)', price: 50 },
    { name: 'Choco Browine Fudge (KW)', price: 50 },
    { name: 'Devine Chocolate Chocochip (KW)', price: 50 },
    { name: 'Kesar Pista (Havmor)', price: 50 },
    { name: 'Matka Fulfi (Havmor)', price: 60 },
    { name: 'Kesar Mohini (Vasilal)', price: 60 },
    { name: 'Oreo (KW)', price: 60 },
    { name: 'Nuty Belgain Dark Chocolate (Havmor)', price: 60 },
    { name: 'Verry Berry Strawberry (BR)', price: 70 },
    { name: 'Alphonso Mango (BR)', price: 85 },
    { name: 'Dutch Chocolate (BR)', price: 85 },
    { name: 'Cotton Candy (BR)', price: 85 },
    { name: 'Honey Nut Crunch (BR)', price: 95 },
    { name: 'Mississippi Mud (BR)', price: 95 },
    { name: 'Mississppi Mud Sundae (BR)', price: 135 },
    { name: 'Double Chocolate (LD)', price: 135 },
    { name: 'Fruit Overload Sundae (BR)', price: 135 },
    { name: 'Pralines & Cream (LD)', price: 150 },
    { name: 'Double Chocolate(LD)', price: 150 }
  ];

  const DryFruit = [
    { name: 'American Nuts (Havmor)', price: 30 },
    { name: 'American Nuts (Vadilal)', price: 35 },
    { name: 'Kesar Mohini (Vasilal)', price: 60 },
    { name: 'Honey Nut Crunch (BR)', price: 95 },
    { name: 'Pralines & Cream (LD)', price: 150 }
  ];

  const Chocolate = [
    { name: 'Silk Chocolate (Vadilal)', price: 50 },
    { name: 'Choco Brownie Dip (Vadilal)', price: 50 },
    { name: 'American Mid Pie (Vadilal)', price: 50 },
    { name: 'Choco Browine Fudge (KW)', price: 50 },
    { name: 'Devine Chocolate Chocochip (KW)', price: 50 },
    { name: 'Oreo (KW)', price: 60 },
    { name: 'Nuty Belgain Dark Chocolate (Havmor)', price: 60 },
    { name: 'Dutch Chocolate (BR)', price: 85 },
    { name: 'Mississippi Mud (BR)', price: 95 },
    { name: 'Mississippi Mud Sundae (BR)', price: 135 },
    { name: 'Double Chocolate (LD)', price: 135 }
  ];

  const Fruit = [
    { name: 'Verry Berry Strawberry (BR)', price: 70 },
    { name: 'Alphonso Mango (BR)', price: 85 },
    { name: 'Cotton Candy (BR)', price: 85 },
    { name: 'Fruit Overload Sundae (BR)', price: 135 }
  ];

  const Sunday = [
    { name: 'Fruit Overload Sundae (BR)', price: 135 },
    { name: 'Mississppi Mud Sundae (BR)', price: 135 }
  ];

  const SugarFree = [
    { name: 'Kesar Pista (Havmor)', price: 50 }
  ];

  // ✅ Define the commonLayout function
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
    <div className="cups-container">
      {/* Top Wave and Title */}
      <div className="top-section">
        <img src={topwave} alt="Top Wave" className="top-wave" />
        <h2 className="cups-title">ICECREAM CUPS</h2>
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
        {activeTab === 'DryFruit' && commonLayout(DryFruit)}
        {activeTab === 'Chocolate' && commonLayout(Chocolate)}
        {activeTab === 'Fruit' && commonLayout(Fruit)}
        {activeTab === 'Sunday' && commonLayout(Sunday)}
        {activeTab === 'SugarFree' && commonLayout(SugarFree)}
        {!['All', 'DryFruit', 'Chocolate', 'Fruit', 'Sunday', 'SugarFree'].includes(activeTab) && (
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

export default Cups;
