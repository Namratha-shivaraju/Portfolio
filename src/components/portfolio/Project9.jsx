import React from 'react';
import "./portfolio.css";

const Project9 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://c14harv.wixsite.com/my-site-2">
      <img className="image" src={require('../../assets//p9.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Paint no Jutsu</h5>
          <p class="card-text">
            Paint no jutsu is my art page where I post my paintings on Instagram.
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project9