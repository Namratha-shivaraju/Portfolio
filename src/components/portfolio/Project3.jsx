import React from 'react'

import "./portfolio.css";


const Project3 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">

      <a href="https://bitqueen.my.canva.site/indiaconnects" target="_blank"> 
        <img className="image" src={require('../../assets//p3.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">IndiaConnects</h5>
          <p class="card-text">
            A social networking platform for people directly or indirectly affected by Covid-19 to share and get access to verified information regarding the availability of hospital beds, ventilators, and donors based on their location.
            </p>
            
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project3
