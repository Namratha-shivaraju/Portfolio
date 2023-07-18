import React from 'react';
import "./portfolio.css";

const Project11 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://medium.com/@nam07/seecarbon-c7fd67e4a051">
      <img className="image" src={require('../../assets//p11.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">SeeCarbon <br></br><br></br></h5>
          <p class="card-text">
            How can we raise awareness among residents of Spring District apartments about their carbon footprint and encourage them to use electricity wisely in order to decrease carbon emissions?
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project11