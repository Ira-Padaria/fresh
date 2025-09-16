import React, { useState } from "react";
import "../styles/fast.css";
import topwave from "../assets/topwave.png";
import wave from "../assets/wave.png";
import rectangle from "../assets/rectangle.png";
import menuIcon from "../assets/menu_icon.png";
import { useNavigate } from "react-router-dom";

const FastSpecial = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const thickShakeTabs = [
    {
      title: "Plain",
      items: [
        { name: "Vanilla", without: 90, with: 110 },
        { name: "Shahi Gulab", without: 90, with: 110 },
        { name: "Kesar", without: 90, with: 110 },
        { name: "Kesar Elaichi", without: 90, with: 110 },
        { name: "Chikoo (organic)", without: 100, with: 120 },
        { name: "Anjeer", without: 100, with: 120 },
        { name: "Strawberry", without: 100, with: 120 },
        { name: "Pineapple", without: 100, with: 120 },
        { name: "Mango", without: 100, with: 120 },
        { name: "Black Current", without: 100, with: 120 },
      ],
    },
    {
      title: "DryFruit",
      items: [
        { name: "Kaju Chikoo", without: 120, with: 140 },
        { name: "Kaju Anjeer", without: 120, with: 140 },
        { name: "Kaju Draksh", without: 120, with: 140 },
        { name: "Kaju Gulkand", without: 120, with: 140 },
        { name: "Kaju Pineapple", without: 120, with: 140 },
        { name: "Kaju Strawberry", without: 120, with: 140 },
        { name: "Kaju Mango", without: 120, with: 140 },
        { name: "Kaju Badam", without: 120, with: 140 },
        { name: "Badam Ajeer", without: 120, with: 140 },
        { name: "Badam Shake", without: 120, with: 140 },
        { name: "Ro. Almond", without: 130, with: 150 },
        { name: "Badam Pista", without: 130, with: 150 },
        { name: "Kaju Pista", without: 130, with: 150 },
        { name: "Royal Kesar Pista", without: 130, with: 150 },
        { name: "Ro. Almond Anjeer", without: 130, with: 150 },
        { name: "Rich Almond", without: 140, with: 160 },
        { name: "Ro. Almond Pista", without: 140, with: 160 },
        { name: "Sp. Kaju", without: 140, with: 160 },
        { name: "Sp. Gold Medal", without: 140, with: 160 },
        { name: "Sp. Gulabi Masti", without: 140, with: 160 },
        { name: "Sp. Dry Fruit", without: 140, with: 160 },
      ],
    },
    {
      title: "Special Dryfruit",
      items: [
        { name: "Sp. Gold Medal", without: 140, with: 160 },
        { name: "Sp. Gulabi Masti", without: 140, with: 160 },
        { name: "Sp. Dry Fruit", without: 140, with: 160 },
      ],
    },
  ];

  const milkshakeTabs = [
    {
      title: "All",
      items: [
        { name: "Pineapple", price: 90 },
        { name: "Mango", price: 90 },
        { name: "Chickoo (Organic)", price: 100 },
        { name: "Kaju Anjeer", price: 140 },
        { name: "Kaju Draksh", price: 140 },
        { name: "Kaju Badam", price: 140 },
        { name: "Kaju Gulkand", price: 140 },
        { name: "Kaju mango", price: 140 },
        { name: "Badam Anjeer", price: 140 },
        { name: "Kaju Strawberry", price: 140 },
        { name: "Sp. Kaju", price: 150 },
        { name: "Kaju Badam Anjeer", price: 150 },
        { name: "Kaju Badam Pista", price: 160 },
        { name: "Roasted Almonds", price: 160 },
        { name: "Roasted Almonds anjeer", price: 180 },
        { name: "Sp. Dryfruit", price: 180 },
        { name: "Sp. Dairy Fresh", price: 200 },
      ],
    },
    {
      title: "Dryfruit",
      items: [
        { name: "Kaju Anjeer", price: 140 },
        { name: "Kaju Draksh", price: 140 },
        { name: "Kaju Badam", price: 140 },
        { name: "Kaju Gulkand", price: 140 },
        { name: "Kaju mango", price: 140 },
        { name: "Badam Anjeer", price: 140 },
        { name: "Kaju Strawberry", price: 140 },
        { name: "Sp. Kaju", price: 150 },
        { name: "Kaju Badam Anjeer", price: 150 },
        { name: "Roasted Almonds", price: 160 },
        { name: "Roasted Almonds anjeer", price: 180 },
        { name: "Sp. Dryfruit", price: 180 },
        { name: "Sp. Dairy Fresh", price: 200 },
      ],
    },
    {
      title: "Special Dairyfresh",
      items: [
        { name: "Sp. Dairy Fresh", price: 200 },
        { name: "Sp. Dryfruit", price: 180 },
        { name: "Roasted Almonds anjeer", price: 180 },
        { name: "Roasted Almonds", price: 160 },
        { name: "Sp. Kaju", price: 150 },
      ],
    },
  ];

  const lassiTabs = [
    {
      title: 'All',
      items: [
        { name: 'Punjabi Lassi', price: 60},
        { name: 'Rose Lassi', price: 70},
        { name: 'Mango Lassi', price: 70},
        { name: 'Pineapple Lassi', price: 70},
        { name: 'Strawberry Lassi', price: 70},
        { name: 'Anjeer Lassi', price: 70},
        { name: 'Kaju Lassi', price: 70},
        { name: 'Punjabi Lassi with Ice.', price: 80},
        { name: 'Kaju Mango Lassi', price: 100},
        { name: 'Kaju Anjeer Lassi', price: 100},
        { name: 'Kaju Mango with Ice. Lassi', price: 120},
        { name: 'Sp. Gold Medal Lassi', price: 120},
        { name: 'Sp. Rajwadi Lassi', price: 120}
      ],
    },
    {
      title: "Flavour", 
      items: [
        { name: 'Rose Lassi', price: 70},
        { name: 'Mango Lassi', price: 70},
        { name: 'Pineapple Lassi', price: 70},
        { name: 'Strawberry Lassi', price: 70},
        { name: 'Anjeer Lassi', price: 70},
      ],
    },
    { 
      title: 'Dryfruit',
      items: [
        { name: 'Anjeer Lassi', price: 70},
        { name: 'Kaju Lassi', price: 70},
        { name: 'Punjabi Lassi with Ice.', price: 80},
         { name: 'Kaju Mango Lassi', price: 100},
        { name: 'Kaju Anjeer Lassi', price: 100},
        { name: 'Kaju Mango with Ice. Lassi', price: 120},
        { name: 'Sp. Gold Medal Lassi', price: 120},
        { name: 'Sp. Rajwadi Lassi', price: 120}
      ],
    },
  ];

  const slicesTabs = [
    {
      title: 'All',
      items: [
        { name: 'Creamy Vanilla', ml100: 40, ml500: 120, ml1000: 200},
        { name: 'Shahi Gulab', ml100: 40, ml500: 120, ml1000: 220},
        { name: 'Strawberry', ml100: 40, ml500: 120, ml1000: 220},
        { name: 'Butter Scotch', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Draksh', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Anjeer', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Gulkand', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Black Current', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Sitafal (seasonal)', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Jambu (seasonal)', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Ro. Almond Anjeer', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Badam Pista', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Pan Masala', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Pan Gulab', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Mawa Malai Pista', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Rajbhog', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Sp. DryFruits', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Kesar Pista', ml100: 65, ml500: 190, ml1000: 350},
        { name: 'Royal Creamy Coconut', ml100: 65, ml500: 190, ml1000: 350},
        { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350}
      ],
    },
    {
      title: 'DryFruit', 
      items: [
        { name: 'Butter Scotch', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Draksh', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Anjeer', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Kaju Gulkand', ml100: 50, ml500: 160, ml1000: 280},
        { name: 'Ro. Almond Anjeer', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Badam Pista', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Pan Masala', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Pan Gulab', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Mawa Malai Pista', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Rajbhog', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Sp. DryFruits', ml100: 55, ml500: 170, ml1000: 300},
        { name: 'Kesar Pista', ml100: 65, ml500: 190, ml1000: 350},
        { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350},
        { name: 'Sp. Dryfruit Cassatta', ml100: 60, ml500: 888, ml1000: 888},
        { name: 'Sp. Cassatta (Havmor)', ml100: 60, ml500: 888, ml1000: 888}
      ],
    },
    { 
      title: 'Novelty', 
      items: [
        { name: 'Tambul Roll', ml100: 70, ml500: 200, ml1000: 350}
      ],
    },
  ];

  const categories = [
    "THICK SHAKE",
    "MILK SHAKE",
    "LASSI",
    "SLICES",
    "CUPS",
    "FAMILY PACK",
  ];

  const renderMenu = (menuTabs) => {
    const currentTab = menuTabs[activeTab];
    if (!currentTab) return <p>No items found</p>;

    return (
      <div className="ts-menu">
        {/* Tabs */}
        <div className="ts-tab-bar">
          {menuTabs.map((tab, idx) => (
            <button
              key={idx}
              className={`ts-tab ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="ts-items">
          {/* Header for Thick Shake */}
          {activeCategory === "THICK SHAKE" && (
            <div className="ts-row ts-header">
              <span className="ts-name"></span>
              <span className="ts-price">
                <span className="price-label">without ice-cream</span>
                <span className="price-label">with ice-cream</span>
              </span>
            </div>
          )}

          {currentTab.items.map((item, idx) => (
            <div key={idx} className="ts-row">
              <span className="ts-name">{item.name}</span>
              <span className="ts-price">
                {item.without !== undefined && item.with !== undefined ? (
                  <>
                    <span>{item.without}</span>
                    <span>{item.with}</span>
                  </>
                ) : (
                  <span>{item.price}</span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          className="back-btn"
          onClick={() => {
            setActiveCategory(null);
            setActiveTab(0);
          }}
        >
          ← Back
        </button>
      </div>
    );
  };

  return (
    <div className="fs-container">
      {/* Top Section */}
      <img src={topwave} alt="Top Wave" className="fs-top-wave" />
      <h2 className="fs-title">FAST SPECIAL</h2>

      {/* Category Grid */}
      {!activeCategory && (
        <div className="fs-grid">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="fs-card"
              onClick={() => {
                if (cat === "THICK SHAKE") {
                  setActiveCategory("THICK SHAKE");
                  setActiveTab(0);
                } else if (cat === "MILK SHAKE") {
                  setActiveCategory("MILK SHAKE");
                  setActiveTab(0);
                } else if (cat === 'LASSI') {
                  setActiveCategory("LASSI");
                  setActiveTab(0);
                } else if (cat === "SLICES") {
                  setActiveCategory("SLICES");
                  setActiveTab(0);
                } 
              }}
            >
              {cat}
            </div>
          ))}
        </div>
      )}

      {/* Menus */}
      {activeCategory === "THICK SHAKE" && renderMenu(thickShakeTabs)}
      {activeCategory === "MILK SHAKE" && renderMenu(milkshakeTabs)}
      {activeCategory === 'LASSI' && renderMenu(lassiTabs)}
      {activeCategory === "SLICES" && renderMenu(slicesTabs)}

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

export default FastSpecial;
