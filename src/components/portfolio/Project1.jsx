import React from 'react'

import "./portfolio.css";

const Project1 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/food-glorious-food">
      <img className="image" src={require('../../assets//p1.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Food, Glorious food</h5>
          <p class="card-text">How might we cause UW students to eat more food made from local sourced ingredients?</p>
          
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project1

