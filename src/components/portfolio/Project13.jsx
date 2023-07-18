import React from 'react'
import "./portfolio.css";

const Project13 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://nam0700.wixsite.com/spaine" target="_blank">
      <img className="image" src={require('../../assets//p13.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">sPAINe</h5>
          <p class="card-text">
            A wearable device that allows user to check if their form is right and gives an overall statistics.
            This device encourages people who do not know where to begin, do not have a personal trainer or have social anxiety to start their fitness journey.
            </p>
        </div>
        </a>
      </div>
    
    </div>
  )
}

export default Project13