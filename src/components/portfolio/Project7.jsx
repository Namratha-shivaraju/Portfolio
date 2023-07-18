import React from 'react';
import "./portfolio.css";

const Project7 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha">
      <img className="image" src={require('../../assets//p7.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Massachusetts Institute of Technology (MIT) India Initiative 2020</h5>
          <p class="card-text">
            The subtle art of actually giving a f*ck - a storyboard project to raise awareness about various social issues.
            </p>
        </div>
        </a>
      </div>
    
    </div>

  )
}

export default Project7