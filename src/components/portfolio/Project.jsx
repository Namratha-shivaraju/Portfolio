import React from 'react';
import "./portfolio.css";

const Project = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://c14harv.wixsite.com/my-site-2">
      <img className="image" src={require('../../assets//p.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Leash.io</h5>
          <p class="card-text">Providing users in the Greater Seattle Area with a means to track a simple walking streak metric in a device that also stores their dog’s leash, as well as making a better outdoors preparedness strategy through weather data placed in the dog leash’s storage proximity.
          </p>
        </div>
        </a>
      </div>
    
    </div>

    
  )
}

export default Project
