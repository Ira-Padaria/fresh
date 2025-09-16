import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import '../styles/slice.css';

const Slice = () => {
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

  const tabs = ['All', 'DryFruit', 'Novelty', 'Roll-cut'];
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const All = [
    { name: 'Creamy Vanilla', ml100: 40, ml500: 120, ml1000: 200 },
    { name: 'Choco Cream', ml100: 40, ml500: 120, ml1000: 220 },
    { name: 'Shahi Gulab', ml100: 40, ml500: 120, ml1000: 220 },
    { name: 'Strawberry', ml100: 40, ml500: 120, ml1000: 220 },
    { name: 'Butter Scotch', ml100: 50, ml500: 130, ml1000: 200 },
    { name: 'Kaju Draksh', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Kaju Anjeer', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Kaju Gulkand', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Black Current', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Sitafal (seasonal)', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Jambu (seasonal)', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Ro.Alomand Chocolate', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Ro.Alomand Anjeer', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'American Nuts', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Badam Pista', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Pan Masala', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Pan Gulab', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Mawa Malai Pista', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Rajbhog', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Sp.Dry Fruits', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Chocolate Chips', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Swiss Cake', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Sp.Dryfruit Cassatta', ml100: 60 },
    { name: 'Sp.Cassatta(Havmor)', ml100: 60 },
    { name: 'Royal Creamy Coconut', ml100: 65, ml500: 190, ml1000: 350 },
    { name: 'Kesar Pista', ml100: 65, ml500: 190, ml1000: 350},
    { name: 'Cream & Cookies', ml100: 65, ml500: 190, ml1000: 350 },
    { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350 },
    { name: 'Rich Almond Roll', ml100: 70, ml500: 200, ml1000: 350 }
  ];

  const dryFruitData = [
    { name: 'Butter Scotch', ml100: 50, ml500: 130, ml1000: 200 },
    { name: 'Kaju Draksh', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Kaju Anjeer', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Kaju Gulkand', ml100: 50, ml500: 130, ml1000: 220 },
    { name: 'Ro.Alomand Chocolate', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Ro.Alomand Anjeer', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'American Nuts', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Badam Pista', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Pan Masala', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Pan Gulab', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Mawa Malai Pista', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Rajbhog', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Sp.Dry Fruits', ml100: 55, ml500: 170, ml1000: 300 }
  ];

  const noveltyData = [
    { name: 'Chocolate Chips', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Swiss Cake', ml100: 55, ml500: 170, ml1000: 300 },
    { name: 'Cream & Cookies', ml100: 65, ml500: 190, ml1000: 350 },
    { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350 },
    { name: 'Rich Almond Roll', ml100: 70, ml500: 200, ml1000: 350 },
    { name: 'Sp.Dryfruit Cassatta', ml100: 60 },
    { name: 'Sp.Cassatta(Havmor)', ml100: 60 }
  ];

  const rollCutData = [
    { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350 },
    { name: 'Rich Almond Roll', ml100: 70, ml500: 200, ml1000: 350 }
  ];

  const commonLayout = (data) => (
    <div className="slice-table">
      <div className="slice-header">
        <div className="slice-name"> </div>
        <div className="slice-vol">100ml</div>
        <div className="slice-vol">500ml</div>
        <div className="slice-vol">1000ml</div>
      </div>
      {data.map((item, i) => (
        <div className="slice-row" key={i}>
          <div className="slice-name">{item.name}</div>
          <div className="slice-vol">{item.ml100 || '-'}</div>
          <div className="slice-vol">{item.ml500 || '-'}</div>
          <div className="slice-vol">{item.ml1000 || '-'}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="slice-container">
      <div className="top-section">
        <img src={topwave} alt="Top Wave" className="top-wave" />
        <h2 className="slice-title">ICECREAM SLICES</h2>
      {/* </div> */}

      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
        >
            {tab}
          </button>
        ))}
      </div>
      </div>

      <div className="tab-content">
        {activeTab === 'All' && commonLayout(All)}
        {activeTab === 'DryFruit' && commonLayout(dryFruitData)}
        {activeTab === 'Novelty' && commonLayout(noveltyData)}
        {activeTab === 'Roll-cut' && commonLayout(rollCutData)}
      </div>

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

export default Slice;
