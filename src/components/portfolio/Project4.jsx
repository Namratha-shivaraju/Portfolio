import React from 'react';
import "./portfolio.css";
const Project4 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">

      <a href="https://bitqueen.my.canva.site/" target="_blank"> 
        <img className="image" src={require('../../assets//p4.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Bit Queen</h5>
          <p class="card-text">
        BitQueen - Creating Our Own Crypto-Tokens and Selling Them
            </p>
            
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project4
