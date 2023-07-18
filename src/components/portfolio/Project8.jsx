import React from 'react';
import "./portfolio.css";

const Project8 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha">
      <img className="image" src={require('../../assets//p8.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Sensor Grow Light for Plants</h5>
          <p class="card-text">
            Grow lights are artificial light sources that are used to help plants grow indoors or in greenhouses. They are particularly useful in places like Seattle where the natural light may not be sufficient for optimal plant growth. 
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project8