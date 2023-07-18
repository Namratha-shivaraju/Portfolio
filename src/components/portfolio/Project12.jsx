import React from 'react'
import "./portfolio.css";

const Project12 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/tangraminds" target="_blank">
      <img className="image" src={require('../../assets//p12.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">TangraMinds </h5>
          <p class="card-text">
          TangramMinds is an intelligent and interactive puzzle system that provides personalized recommendations and creative works recording function, enhancing children's problem-solving skills, creativity, and spatial awareness while maintaining their interest.
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project12