import React from 'react';

import "./portfolio.css";

const Project2 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha" target="_blank">
      <img className="image" src={require('../../assets//p2.jpeg')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Anti-Money laundering analytics on the Bitcoin transactions</h5>
          <p class="card-text">
             Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project2

