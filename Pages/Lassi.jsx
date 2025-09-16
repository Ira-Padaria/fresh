import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/lassi.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';


const Lassi = () => {
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


const tab = ['All', 'Flavour', 'DryFruit'];

const handleTabClick = (tab) => {
    setActiveTab(tab);
};

const All = [
    { name: 'Punjabi Lassi', price: 60},
    { name: 'Rose Lassi', price: 70},
    { name: 'Mango Lassi', price: 70},
    { name: 'Pineapple Lassi', price: 70},
    { name: 'Strawberry Lassi', price: 70},
    { name: 'Chocolate Lassi', price: 70},
    { name: 'Anjeer Lassi', price: 70},
    { name: 'Chocolate Chips Lassi', price: 80},
    { name: 'Punjabi Lassi With Ice.', price: 80},
    { name: 'Kaju Lassi', price: 90},
    { name: 'Kaju Mango Lassi', price: 100},
    { name: 'Kaju Anjeer Lassi', price: 100},
    { name: 'Kaju Mango With Ice. Lassi', price: 120},
    { name: 'Sp.Gold Medal Lassi', price: 120},
    { name: 'Sp.Rajwadi Lasssi', price: 120}
]; 

const Flavour = [ 
    { name: 'Rese Lassi', price: 70},
    { name: 'Mango Lassi', price: 70},
    { name: 'Pineapple Lassi', price: 70},
    { name: 'Strawberry Lassi', price: 70},
    { name: 'Anjeer Lassi', price: 70},
    { name: 'Chocolate Lassi', price: 70}
];

const DryFruit = [
    { name: 'Anjeer Lassi', price: 70},
    { name: 'Kaju Lassi', price: 90},
    { name: 'Chocolate Chips Lassi', price: 80},
    { name: 'Punjabi Lassi With Ice.', price: 80},
    { name: 'Kaju Mango Lassi', price: 100},
    { name: 'Kaju Anjeer Lassi', price: 100},
    { name: 'Kaju Mango With Ice. Lassi', price: 120},
    { name: 'Sp.Gold Medal Lassi', price: 120},
    { name: 'Sp.Rajwadi Lasssi', price: 120}
];


  const commonLayout = (items) => (
    <div className="lassi-table">
      {items.map((item, index) => (
        <div className="lassi-row" key={index}>
          <div className="lassi-name">{item.name}</div>
          <div className="lassi-price">{item.price}</div>
        </div>
      ))}
    </div>
  );

   return (
      <div className="lassi-container">
        {/* Top Wave and Title */}
        <div className="top-section">
          <img src={topwave} alt="Top Wave" className="top-wave" />
          <h2 className="lassi-title">LASSI</h2>
        </div>
  
        {/* Tabs */}
        <div className="tab-bar">
    {tab.map((tab) => (
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
        {activeTab === 'Flavour' && commonLayout(Flavour)}
        {activeTab === 'DryFruit' && commonLayout(DryFruit)}
        {activeTab !== 'All' && activeTab !== 'Flavour' && activeTab !== 'DryFruit' &&  (
          <p className="coming-soon">{activeTab} Items coming soon...</p>
        )}
      </div>

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

export default Lassi;