import React, { useState } from "react";
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import havmor from '../assets/Havmor.png';
import kwalitywalls from '../assets/Kwalitywalls.png';
import londondairy from '../assets/Londondairy.png';
import vadilal from '../assets/Vadilal.png';
import tubfamilyData from "../data/tubfamilyData";
import "../styles/tub.css";
import { useNavigate } from "react-router-dom";

const brands = [
  { name: "Havmor", logo: havmor },
  { name: "kwalitywalls", logo: kwalitywalls },
  { name: "londondairy", logo: londondairy },
  { name: "Vadilal", logo: vadilal },
];

const TubFamily = () => {
  const [mainTab, setMainTab] = useState("Tub");
  const [subTab, setSubTab] = useState("Plain"); 
  const [selectedBrand, setSelectedBrand] = useState(null);

  const navigate = useNavigate();

  const tubItems = selectedBrand ? tubfamilyData.Tub[selectedBrand] || [] : [];

  return (
    <div className="tubfamily-container">
      <img src={topwave} alt="Top Wave" className="top-wave" />
      <h2 className="tub-title">TUB & FAMILY PACK</h2>

      {/* Tabs */}
      <div className="main-tabs">
        {["Tub", "FamilyPack"].map((tab) => (
          <button
            key={tab}
            className={`main-tab ${mainTab === tab ? "active" : ""}`}
            onClick={() => {
              setMainTab(tab);
              setSelectedBrand(null); // reset brand when switching tab
            }}
          >
            {tab.replace("FamilyPack", "Family Pack")}
          </button>
        ))}
      </div>

      {/* Tub Cards */}
      {mainTab === "Tub" && (
        <>
          <div className="tub-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="tub-card"
                onClick={() => setSelectedBrand(brand.name)}
              >
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </div>

          {/* Menu below cards */}
          {selectedBrand && (
            <div className="menu-list">
              <h3 className="brand-title">{selectedBrand} Menu</h3>
              {tubItems.length ? (
                tubItems.map((item, i) => (
                  <div key={i} className="menu-row">
                    <span className="menu-name">{item.name}</span>
                    <span className="menu-price">₹{item.price}</span>
                  </div>
                ))
              ) : (
                <p>No items available</p>
              )}
            </div>
          )}
        </>
      )}

      {/* Family Pack SubTabs + Menu */}
      {mainTab === "FamilyPack" && (
        <>
          <div className="sub-tabs">
            {["Plain", "DryFruit", "Novelty", "RollCut"].map((tab) => (
              <button
                key={tab}
                className={`sub-tab ${subTab === tab ? "active" : ""}`}
                onClick={() => setSubTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* <div className="menu-list">
            <p>Family Pack items for {subTab} will come here.</p>
          </div> */}
          {/* <div className="menu-table">
      {tubfamilyData.FamilyPack[subTab]?.length ? (
        tubfamilyData.FamilyPack[subTab].map((item, i) => (
          <div key={i} className="menu-row">
            <span className="menu-name">{item.name}</span>
            <span className="menu-price">
              {Object.entries(item.prices).map(([size, price]) => (
                <div key={size}>
                  {size} {price}
                </div>
              ))}
            </span>
          </div>
        ))
      ) : (
        <p className="no-items">No items available</p>
      )}
    </div> */}
    <div className="menu-table">
  {tubfamilyData.FamilyPack[subTab]?.length ? (
    tubfamilyData.FamilyPack[subTab].map((item, i) => (
      <div key={i} className="menu-row">
        <span className="menu-name">{item.name}</span>
        <span className="menu-price">
          {item.prices ? (
            Object.entries(item.prices).map(([size, price]) => (
              <div key={size}>
                {size} - {price}
              </div>
            ))
          ) : (
            <>₹{item.price}</>
          )}
        </span>
      </div>
    ))
  ) : (
    <p className="no-items">No items available</p>
  )}
</div>

        </>
      )}

      {/* Bottom menu icon */}
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

export default TubFamily;
