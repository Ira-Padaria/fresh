import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/thickshake.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const ThickShake = () => {
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

  const tabs = ['All', 'DryFruit', 'Choco Fantasy', 'Special Dairy Fresh'];

   const handleTabClick = (tab) => {
    setActiveTab(tab);
    // if (tabRefs.current[tab]) {
    //   tabRefs.current[tab].scrollIntoView({
    //     behavior: "smooth",
    //     inline: "center",
    //     block: "nearest",
    //   });
    // }
  };

  const All = [
    { name: 'Vanilla', without: 90, with: 110 },
    { name: 'Shahi Gulab', without: 90, with: 110 },
    { name: 'Kesar', without: 90, with: 110 },
    { name: 'Kesar-Elaichi', without: 90, with: 110 },
    { name: 'Chikoo (Organic)', without: 100, with: 120 },
    { name: 'Chocolate', without: 100, with: 120 },
    { name: 'Anjeer', without: 100, with: 120 },
    { name: 'Strawberry', without: 100, with: 120 },
    { name: 'Pineapple', without: 100, with: 120 },
    { name: 'Mango', without: 100, with: 120 },
    { name: 'Black Current', without: 100, with: 120 },
    { name: 'Kaju Chickoo', without: 120, with: 140},
    { name: 'Kaju Anjeer', without: 120, with: 140},
    { name: 'Kaju Draksh', without: 120, with: 140},
    { name: 'Kaju Gulkand', without: 120, with: 140},
    { name: 'Kaju Pineaaple', without: 120, with: 140},
    { name: 'Kaju Strawbeery', without: 120, with: 140},
    { name: 'Kaju Mango', without: 120, with: 140},
    { name: 'Kaju Chocolate', without: 120, with: 140},
    { name: 'Kaju Badam', without: 120, with: 140},
    { name: 'Badam Ajeer', without: 120, with: 140},
    { name: 'Badam Shake', without: 120, with: 140},
    { name: 'Ro.Alomond', without: 130, with: 150},
    { name: 'Badam Pista', without: 130, with: 150},
    { name: 'Kaju Pista', without: 130, with: 150},
    { name: 'Choco Nuts', without: 130, with: 150},
    { name: 'Royal Kesar Pista', without: 130, with: 150},
    { name: 'Ro.Almond Anjeer', without: 130, with: 150},
    { name: 'Ro. Almond Chocolate', without: 130, with: 150},
    { name: 'Choco Nuts', without: 130, with: 150},
    { name: 'Rich Almond', without: 140, with: 160},
    { name: 'Ro.Almond Pista', without: 140, with: 160},
    { name: 'Sp.Kaju', without: 140, with: 160},
    { name: 'American Dryfruit', without: 140, with: 160},
    { name: 'Sp. Gold Medal', without: 140, with: 160},
    { name: 'Sp. Gulabi Masti', without: 140, with: 160},
    { name: 'Sp. Dry Fruit', without: 140, with: 160},
    { name: 'Oreo', without: 140, with: 160},
    { name: 'kit Kat', without: 140, with: 160},
    { name: 'Kit Kat Oreo', without: 140, with: 160},
    { name: 'Sp. Nutty Nutella', without: 160, with: 180},
    { name: 'Sp. Dairy Fresh', without: 160, with: 180}
  ];

  const dryfruitData = [
    { name: 'Kaju Chickoo', without: 120, with: 140},
    { name: 'Kaju Anjeer', without: 120, with: 140},
    { name: 'Kaju Draksh', without: 120, with: 140},
    { name: 'Kaju Gulkand', without: 120, with: 140},
    { name: 'Kaju Pineaaple', without: 120, with: 140},
    { name: 'Kaju Strawbeery', without: 120, with: 140},
    { name: 'Kaju Mango', without: 120, with: 140},
    { name: 'Kaju Chocolate', without: 120, with: 140},
    { name: 'Kaju Badam', without: 120, with: 140},
    { name: 'Badam Ajeer', without: 120, with: 140},
    { name: 'Badam Shake', without: 120, with: 140},
    { name: 'Ro.Alomond', without: 130, with: 150},
    { name: 'Badam Pista', without: 130, with: 150},
    { name: 'Choco Vanilla', without: 120, with: 140},
    { name: 'Choco Chips', without: 120, with: 140},
    { name: 'Chickoo chocolate', without: 120, with: 140},
  ];

  const chocofantasy = [
    { name: 'Chocolate', without: 100, with: 120},
    { name: 'Choco Vanilla', without: 120, with: 140},
    { name: 'Choco Chips', without: 120, with: 140},
    { name: 'Chickoo chocolate', without: 120, with: 140},
    { name: 'kaju Chocolate', without: 120, with: 140},
    { name: 'Choco Nuts', without: 130, with: 150},
    { name: 'Ro. Almond Chocolate', without: 130, with: 150},
    { name: 'Oreo', without: 140, with: 160},
    { name: 'kit Kat', without: 140, with: 160},
    { name: 'Kit Kat Oreo', without: 140, with: 160}
  ];

  const specialdairyfresh = [
    { name: 'Sp. Gold Medal', without: 140, with: 160},
    { name: 'Sp. American Dryfruit', without: 140, with: 160},
    { name: 'Sp. Gulabi Masti', without: 140, with: 160},
    { name: 'Sp. Dry Fruit', without: 140, with: 160},
    { name: 'Sp. Nutty Nutella', without: 160, with: 180},
    { name: 'Sp. Dairy Fresh', without: 160, with: 180}
  ];
  const commonLayout = (data) => (
    <div className="shake-table">
      <div className="shake-table-header">
        <div className="shake-name-col"> </div>
        <div className="shake-price-col">without <br />ice-cream</div>
        <div className="shake-price-col">with <br />ice-cream</div>
      </div>

      {data.map((item, index) => (
        <div className="shake-table-row" key={index}>
          <div className="shake-name-col">{item.name}</div>
          <div className="shake-price-col">{item.without}</div>
          <div className="shake-price-col">{item.with}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="thickshake-container">
      {/* Top Wave and Title */}
      <div className="top-section">
        <img src={topwave} alt="Top Wave" className="top-wave" />
        <h2 className="thickshake-title">THICK SHAKE</h2>
      </div>

      {/* Tabs */}
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

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'All' && commonLayout(All)}
        {activeTab === 'DryFruit' && commonLayout(dryfruitData)}
        {activeTab === 'Choco Fantasy' && commonLayout(chocofantasy)}
        {activeTab === 'Special Dairy Fresh' && commonLayout(specialdairyfresh)}
        {activeTab !== 'All' && activeTab !== 'DryFruit' && activeTab !== 'Choco Fantasy' && activeTab !== 'Special Dairy Fresh' && (
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

export default ThickShake;
