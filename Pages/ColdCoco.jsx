import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/coco.css';
import topwave from '../assets/topwave.png';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';

const coldCocoData = [
    { name: 'Plain Coco', price: 60},
    { name: 'Coco Crunch', price: 80},
    { name: 'Kaju Coco', price: 90},
    { name: 'Kitkat Coco', price: 90},
    { name: 'Oreo Coco', price: 90},
    { name:'Roasted almonds Coco', price: 90},
    { name: 'Coco with Ice-cream', price: 90},
    { name: 'Kaju Crunch Coco', price: 110},
    { name: 'Kaju Coco with Ice-Cream', price: 120},
    { name: 'Kikat Coco with Ice-Cream', price: 120},
    { name: 'Coco Crunch with Ice-Cream', price: 120},
    { name: 'Oreo Coco with Ice-Cream', price: 120},
    { name: 'Sp.Coco', price: 150}
];

const ColdCoco = () => {
    const navigate = useNavigate();
    return (
        <div className='ColdCoco-container'>
            <img src={topwave} alt="Top Wave" className="top-wave" />
            <h2 className="ColdCoco-title">COLD COCO</h2> 

        <div className="menu-list">
        {/* <div className="menu-header">
          <div className="item-name white">Item</div>
          <div className="item-price white">Price</div>
        </div> */}

        {coldCocoData.map((item, index) => (
          <div className="menu-row" key={index}>
            <div className="item-name yellow">{item.name}</div>
            <div className="item-price yellow">{item.price}</div>
          </div>
        ))}
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

export default ColdCoco;