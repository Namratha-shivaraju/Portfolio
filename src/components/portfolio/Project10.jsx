import React from 'react';
import "./portfolio.css";

const Project10 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha" target="_blank">
      <img className="image" src={require('../../assets//p10.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">FOCAL - FOSSEE Summer Fellowship 2021 by IIT Bombay</h5>
          <p class="card-text">
            FOSSEE Summer Fellowship 2021 in Graphics and Animation - As a part of screening task, I had to submit four documents using open source software - InkScape, GIMP and Scribus.
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project10