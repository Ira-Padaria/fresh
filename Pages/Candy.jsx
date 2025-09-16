import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/candy.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import baskin from '../assets/baskinrobbins.png';
import london from '../assets/Londondairy.png';
import havmor from '../assets/Havmor.png';
import hajoori from '../assets/HajooriKulfi.png';
import vadilal from '../assets/Vadilal.png';
import lotte from '../assets/Lottegroup.png';
import kwality from '../assets/Kwalitywalls.png';

const CandyBar = () => {
  const [activeTab, setActiveTab] = useState("brands");
  const [activeFlavour, setActiveFlavour] = useState("all");
  const navigate = useNavigate();

  const tabs = [
    { key: "brands", label: "BY BRAND" },
    { key: "flavour", label: "BY FLAVOUR" },
  ];

  const flavourTabs = [
    { key: "all", label: "All" },
    { key: "fruit", label: "Fruit" },
    { key: "dryfruit", label: "DryFruit" },
  ];

  const flavourData = {
    all: [
      { name: "Orange Bar", price: 10 },
      { name: "Chocobar (Havmor)", price: 20 },
      { name: "Mango Dolly (Havmor)", price: 20 },
      { name: "Raspberry Dolly (Havmor)", price: 20 },
      { name: "Shahi Pista Kulfi (Havmor)", price: 25 },
      { name: "Bombay Kulfi(Mawa Malai) (Havmor)", price: 25 },
      { name: "Crunchy Chocobar (Havmor)", price: 30 },
      { name: "Rajbhog (Havmor)", price: 30 },
      { name: "Chowpati Kulfi(Mawa Malai) (Havmor)", price: 40 },
      { name: "Zulubur (Havmor)", price: 50 },
      { name: "Zulubar Dark Chocolate (Havmor)", price: 50 },
      { name: "Choco Almond(Badabite) (Havmor)", price: 50 },
      { name: "Cookies N Cream(Badabite) (Havmor)", price: 50 },
      { name: "Mango(Badabite) (Havmor)", price: 50 },
      { name: "Red Velvet(Badabite) (Havmor)", price: 50 },
      { name: "Fresh Jamun Shot(Hajoori)", price: 50 },
      { name: "Shahi DryFruit (Hajoori)", price: 50 },
      { name: "Kesar Pista (Hajoori)", price: 50 },
      { name: "Almond Mocha (Havmor)", price: 60 },
      { name: "Choco Krunch Vanilla(Lotte)", price: 60 },
      { name: "Mango Magic (Havmor)", price: 60 },
      { name: "Wild Berries (Havmor)", price: 60 },
      { name: "Blueberry Sorbet (LD)", price: 60 },
      { name: "Pink Guava Sorbet (LD)", price: 60 },
      { name: "Pina Colada Sorbet (LD)", price: 60 },
      { name: "Peach Apricot Sorbet (LD)", price: 60 },
      { name: "Yoghurt Krnuch Berry(Lotte)", price: 60 },
      { name: "Feast (KW)", price: 70 },
      { name: "Brownie Magnum (KW)", price: 80 },
      { name: "Cotton Candy (BR)", price: 80 },
      { name: "Belgian Chocolate (LD)", price: 150 },
      { name: "Hazelnut (LD)", price: 150 },
      { name: "Almond (LD)", price: 150 },
      { name: "Raspberry Sorbet(LD)", price: 150 },
      { name: "Mango Sorbet(LD)", price: 150 },
    ],
    fruit: [
      { name: "Mango Dolly (Havmor)", price: 20 },
      { name: "Raspberry Dolly (Havmor)", price: 20 },
      { name: "Mango(Badabite) (Havmor)", price: 50 },
      { name: "Red Velvet(Badabite) (Havmor)", price: 50 },
      { name: "Mango Magic (Havmor)", price: 60 },
      { name: "Wild Berries (Havmor)", price: 60 },
      { name: "Blueberry Sorbet (LD)", price: 60 },
      { name: "Pink Guava Sorbet (LD)", price: 60 },
      { name: "Pina Colada Sorbet (LD)", price: 60 },
      { name: "Peach Apricot Sorbet (LD)", price: 60 },
      { name: "Cotton Candy (BR)", price: 80 },
      { name: "Raspberry Sorbet", price: 150 },
    ],
    dryfruit: [
      { name: "Shahi Pista Kulfi (Havmor)", price: 25 },
      { name: "Bombay Kulfi(Mawa Malai) (Havmor)", price: 25 },
      { name: "Rajbhog (Havmor)", price: 30 },
      { name: "Chowpati Kulfi(Mawa Malai) (Havmor)", price: 40 },
      { name: "Choco Almond(Badabite) (Vadilal)", price: 50 },
      { name: "Shahi DryFruit (Hajoori)", price: 50 },
      { name: "Kesar Pista (Hajoori)", price: 50 },
      { name: "Almond Mocha (Havmor)", price: 60 },
      { name: "Hazelnut (LD)", price: 150 },
      { name: "Almond (LD)", price: 150 },
    ],
  };

  return (
    <div className="candybar-container">
      <img src={topwave} alt="Top Wave" className="top-wave" />
      <h2 className="candybar-title">CANDY BAR</h2>

      {/* Tabs */}
      <div className="tab-container">
        {tabs.map((tab) => (
          <React.Fragment key={tab.key}>
            <button
              className={`tab-button ${
                activeTab === tab.key ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
            {tab.key === "brands" && <div className="divider">|</div>}
          </React.Fragment>
        ))}
      </div>

      {/* Brand Content */}
      {activeTab === "brands" && (
        <div className="brand-grid">
          <img
            src={baskin}
            alt="Baskin Robbins"
            onClick={() => navigate("/menu/baskinrobbins")}
          />
          <img
            src={london}
            alt="London Dairy"
            onClick={() => navigate("/menu/londondairy")}
          />
          <img
            src={havmor}
            alt="Havmor"
            onClick={() => navigate("/menu/havmor")}
          />
          <img
            src={hajoori}
            alt="Hajoori’s Kulfi"
            onClick={() => navigate("/menu/hajoori")}
          />
          <img
            src={vadilal}
            alt="Vadilal"
            onClick={() => navigate("/menu/vadilal")}
          />
          <img
            src={lotte}
            alt="Lottegroup"
            onClick={() => navigate("/menu/lottegroup")}
          />
          <img
            src={kwality}
            alt="Kwality Walls"
            onClick={() => navigate("/menu/kwalitywalls")}
          />
        </div>
      )}

      {/* Flavour Content */}
      {activeTab === "flavour" && (
        <div className="flavour-section">
          <div className="sub-tab-container">
            {flavourTabs.map((ft) => (
              <button
                key={ft.key}
                className={`sub-tab-button ${
                  activeFlavour === ft.key ? "active" : ""
                }`}
                onClick={() => setActiveFlavour(ft.key)}
              >
                {ft.label}
              </button>
            ))}
          </div>

          <div className="flavour-items">
            {(flavourData[activeFlavour] || []).map((item, index) => {
              // split text in/outside brackets
              const parts = item.name.split(/(\(.*?\))/g);

              return (
                <div key={index} className="flavour-row">
                  <span className="flavour-name">
                    {parts.map((part, i) =>
                      part.startsWith("(") && part.endsWith(")") ? (
                        <span key={i} className="brand-name">
                          {part}
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </span>
                  <span className="flavour-price">{item.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Menu */}
      <div className="bottom-wave-menu">
        <img src={wave} alt="Wave" className="bottom-wave" />
        <div
          className="menu-wrapper"
          onClick={() => navigate("/home", { state: { scrollToMenu: true } })}
          style={{ cursor: "pointer" }}
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

export default CandyBar;
