import React from "react";
import { useNavigate } from 'react-router-dom';
import brandData from "../data/brandData";
import '../styles/brand.css'

const BrandSection = () => {
    const navigate = useNavigate();

    return (
    <div className="brand-section">
      <h2 className="brand-title">OUR BRANDS</h2>
      <div className="brand-grid">
        {brandData.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() =>
            navigate('/loading', { state: { targetRoute: brand.path } })
            }
          >
            <img src={brand.image} alt={brand.name} className="brand-img" />
            {/* <p className="brand-name">{brand.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSection;