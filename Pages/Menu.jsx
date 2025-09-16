// Menu.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/menu.css';
import menuData from '../data/menuData';
import wave from '../assets/wave.png';
import rectangle from '../assets/rectangle.png';
import menuIcon from '../assets/menu_icon.png';
import logo from '../assets/Logo.png';
import BrandSection from '../components/BrandSection';
import Footer from '../components/Footer';

const Menu = () => {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
  if (name.toLowerCase() === 'thick shake') {
    navigate('/loading', { state: { targetRoute: '/thickshake' } });
  } else if (name.toLowerCase() === 'slice') {
    navigate('/loading', { state: { targetRoute: '/slice' } });
  } else if (name.toLowerCase() === 'cups') {
    navigate('/loading', {state: { targetRoute: '/cups'} });
  } else if (name.toLowerCase() === 'cold coco') {
    navigate('/loading',{state: { targetRoute: '/coldcoco'} });
  } else if  (name.toLowerCase() === 'milk shake') {
    navigate('/loading', {state: { targetRoute: '/milkshake'} });
  } else if (name.toLowerCase() === 'candy') {
    navigate('/loading', {state: {targetRoute: '/candy'} });
  } else if (name.toLowerCase() === 'king cone') {
    navigate('/loading', {state: {targetRoute: '/kingcone'} });
  } else if (name.toLowerCase() === 'tubs & family-pack'){
    navigate('/loading', {state: {targetRoute: '/tubfamily'} });
  } else if (name.toLowerCase() === 'lassi') {
    navigate('/loading', {state: { targetRoute: '/lassi'} });
  } else if (name.toLowerCase() === 'badam shake' ) {
    navigate('/loading', {state: {targetRoute: '/badamshake'} });
  } else if (name.toLowerCase() === 'falooda') {
    navigate('/loading', {state: {targetRoute: '/falooda'} });
  } else if (name.toLowerCase() === 'cold coffe') {
    navigate ('/loading', {state: { targetRoute: '/coldcoffe'} });
  } else if (name.toLowerCase() === 'icecream cake') {
    navigate ('/loading', { state: {targetRoute: '/icecreamcake'} });
  } else if (name.toLowerCase() === 'energy drink') {
    navigate ('/loading', {state: {targetRoute: '/energydrink'} });
  } else if (name.toLowerCase() === 'baskin robbins') {
    navigate ('/loading', { state: { targetRoute: '/baskinrobbins'} });
  } else if (name.toLowerCase() === 'london dairy') {
    navigate ('/loading', {state: {targetRoute: '/londondairy'} });
  } else if (name.toLowerCase() === 'havmor') {
    navigate ('/loading', {state: {targetRoute: '/havmor'} });
  } else if (name.toLowerCase() === 'hajoori kulfi') {
    navigate ('/loading', {state: {targetRoute: '/hajoorikulfi'} });
  } else if (name.toLowerCase() === 'vadilal') {
    navigate ('/loading', {state: {targetRoute: '/vadilal'} });
  } else if (name.toLowerCase() === 'lotte') {
    navigate ('/loading', {state: {targetRoute: '/lottegroup'} });
  } else if (name.toLowerCase() === 'kwality walls') {
    navigate ('/loading', {state: {targetRoute: '/kwalitywalls'} });
  } else if (name.toLowerCase() === 'fast special') {
    navigate ('/loading', {state: {targetRoute: '/fastspecial'} });
  }
  // const handleCardClick = (name) => {
  //   const loweName = name.toLowerCase();
  //   if (loweName === 'thick shake' || loweName === 'Slice') {
  //     navigate('/loading');
  //   }
    // if (name.toLowerCase() === 'thick shake'){
    //   navigate('/loading');
    // }
  };

  return (
    <div className="menu-container">

      <div className="category-grid">
        {menuData.map((item, index) => (
          <div key={index} className="menu-card" onClick={() => handleCardClick(item.name)}>
            <img src={item.image} alt={item.name} className="menu-card-img" />
            <div className="menu-card-label">{item.name}</div>
          </div>
        ))}
      </div>
        <BrandSection />
        <Footer />
    </div>
  );
};

export default Menu;
