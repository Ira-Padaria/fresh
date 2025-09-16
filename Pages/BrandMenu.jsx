import React, { useState} from "react";
import { useParams } from "react-router-dom";
import brandMenuData from "../data/brandmenuData";
import wave from "../assets/wave.png";
import rectangle from "../assets/rectangle.png";
import menuIcon from "../assets/menu_icon.png";
import "../styles/brandmenu.css";

import baskinwave from "../assets/baskinwave.png";
import londowave from "../assets/londowave.png";
import havmor from "../assets/havmorwave.png";
import hajoorisKulfi from "../assets/hajooriwave.png";
import vadilal from '../assets/vadilalwave.png';
import kwalitywalls from '../assets/kwalitywave.png';
import lottegroup from '../assets/lottewave.png';
import brandData from "../data/brandData";

const BrandMenu = () => {
  const { brandName } = useParams();
  const brand = brandMenuData[brandName.toLowerCase()]; // normalize for safety


  const categoryKeys = brand?.categories ? Object.keys(brand.categories) : [];
  const [activeTab, setActiveTab] = useState(categoryKeys[0] || null);

  // If brand not found in brandMenuData
  if (!brand) {
    return <h2>Menu not available</h2>;
  }

  // Get wave image dynamically
  const getWaveImage = () => {
    switch (brandName.toLowerCase()) {
      case "baskinrobbins":
        return baskinwave;
      case "londondairy":
        return londowave;
      case "havmor":
        return havmor;
      case "hajoori":
        return hajoorisKulfi;
      case "vadilal":
        return vadilal;
      case "kwalitywalls":
        return kwalitywalls;
      case "lottegroup":
        return lottegroup;
      default:
        return wave;
    }
  };

  // Get logo from brandData (if available)
  const brandInfo = brandData.find((b) => b.name.toLowerCase() === brandName.toLowerCase());
  const waveImage = brandInfo?.waveImage || getWaveImage();

  
  return (
    <div className="brandmenu-container">
      {/* Top Logo & Wave */}
      <div className="brandmenu-header">
        <img src={waveImage} alt="wave" className="brand-wave" />
        {brandInfo && <img src={brandInfo.image} alt={brandName} className="brand-logo" />}
        {!brandInfo && brand.logo && <img src={brand.logo} alt={brandName} className="brand-logo" />}
      </div>

        {/* Tabs */}
      {categoryKeys.length > 0 && (
        <div className="menu-tabs">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Items of Active Tab only */}
<div className="menu-items">
  {/* Active tab items only */}
  {brand.categories && activeTab && (
    <div className="category-section">
      {/* <h3 className="category-title">{activeTab}</h3> */}
      {brand.categories[activeTab].map((item, index) => (
        <div key={index} className="menu-row">
          <span className="menu-name">{item.name}</span>
          <span className="menu-price">{item.price}</span>
        </div>
      ))}
    </div>
  )}

  {/* If brand only has items (no categories) */}
  {!brand.categories &&
    brand.items &&
    brand.items.map((item, index) => (
      <div key={index} className="menu-row">
        <span className="menu-name">{item.name}</span>
        <span className="menu-price">{item.price}</span>
      </div>
    ))}

  {/* If no items or categories */}
  {!brand.items && !brand.categories && <p>No items available</p>}
</div>

      {/* Bottom Menu */}
      <div className="bottom-wave-menu">
        <img src={wave} alt="Wave" className="bottom-wave" />
        <div className="menu-wrapper">
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

export default BrandMenu;
