import React from 'react';
import './background.css';
import roller from '../../assets/all-images/roller.jpg';
import roman from '../../assets/all-images/roman.jpg';
import zebra from '../../assets/all-images/zebra.jpg';
import Venetian from '../../assets/all-images/venetian.jpg'; 
import honeycomb from '../../assets/all-images/honeycomb.jpg';
import vertical from '../../assets/all-images/vertical.jpg';
import panel from '../../assets/all-images/panel.jpg';
import skylight from '../../assets/all-images/skylight.jpg';
import monsoon from '../../assets/all-images/monsoon.jpg';

const Background = () => {
  const products = [
    {
      name: 'Roller',
      image: roller,
      description: `Embrace the perfect harmony of style and functionality with our exquisite roller blinds. Engineered to elevate your living or working space, these sleek and versatile window coverings offer effortless operation and precise light control. Discover a wide range of fabrics and patterns that harmonize with any interior decor, providing privacy while optimizing natural light. Transform your space with Furnish & Shade's Roller Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Roman',
      image: roman,
      description: `Experience the allure of Roman blinds, meticulously tailored with soft and sumptuous fabrics that gracefully fold into a cascade of timeless style. Our collection boasts an array of colors and patterns to complement your decor while providing privacy and gentle diffusion of natural light. Transform your space with Furnish & Shade's Roman Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Zebra',
      image: zebra,
      description: `Zebra blinds feature alternating sheer and solid fabric bands, allowing you to effortlessly control light and privacy with a gentle pull. Embrace the contemporary look that adds a touch of modern elegance to any space. Transform your space with Furnish & Shade's Zebra Blinds, where sophistication meets simplicity.`,
    },
     {
      name: 'Venetian',
      image: Venetian,
      description: `Crafted with meticulous attention to detail, Venetian blinds feature horizontal slats that offer a refined and sophisticated look, adding a touch of classic charm to any room. Transform your space with Furnish & Shade's Venetian Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Honeycomb',
      image: honeycomb,
      description: `Honeycomb blinds are known for their unique cellular design, creating air pockets that act as natural insulators, keeping your room comfortable all year round while reducing energy consumption. Transform your space with Furnish & Shade's Honeycomb Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Vertical',
      image: vertical,
      description: `Enjoy complete control over light and privacy with the ability to tilt the vertical slats, allowing you to effortlessly adjust the incoming light and shield your interiors as needed. Transform your space with Furnish & Shade's Vertical Blinds, where sophistication meets simplicity.`,
    },
     {
      name: 'Panel',
      image: panel,
      description: `Panel blinds feature wide fabric panels that effortlessly glide along a track system, creating a clean and uncluttered look that complements modern living spaces. Transform your space with Furnish & Shade's Panel Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Skylight',
      image: skylight,
      description: `Customized to fit various skylight shapes and sizes, our Skylite blinds offer a seamless integration that enhances the aesthetics of your interior while providing superior shading solutions. Transform your space with Furnish & Shade's Skylight Blinds, where sophistication meets simplicity.`,
    },
    {
      name: 'Monsoon',
      image: monsoon,
      description: `Monsoon blinds are crafted from high-quality materials that withstand harsh weather, offering exceptional protection for your outdoor areas and patio spaces. Transform your space with Furnish & Shade's Monsoon Blinds, where sophistication meets simplicity.`,
    },
  ];

  return (
  <div className="background-wrapper">
    <div className="product-filters">
      <button className="filter-btn active">Blinds</button>
      <button className="filter-btn">Curtain Systems</button>
      <button className="filter-btn">Awnings</button>
      <button className="filter-btn">Motorization</button>
    </div>

    <div className="product-section">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="name-tag">{product.name}</div>
          <div className="overlay">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="buttons">
              <button className="inquiry-btn">Quick Inquiry →</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default Background;
