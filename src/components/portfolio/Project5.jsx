import React from 'react';
import "./portfolio.css";

const Project5 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha" target="_blank">
      <img className="image" src={require('../../assets//p5.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Porting Hindi ASR using Raspberry pi 3</h5>
          <p class="card-text">
          A portable device that can detect, receive and process voice audio data in real time.</p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project5