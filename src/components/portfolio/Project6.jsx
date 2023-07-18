import React from 'react';
import "./portfolio.css";

const Project6 = () => {
  return (
    <div className="portfolio_content">
      <div class="card">
      <a href="https://bitqueen.my.canva.site/namratha" target="_blank">
      <img className="image" src={require('../../assets//p6.png')} alt=""/>
        <div class="card-body">
          <h5 class="card-title">Automatic Face Recognition Attendance Application</h5>
          <p class="card-text">
          Help teachers take the class attendance in a quicker and easier fashion.</p>
        </div>
        </a>
      </div>
    
    </div>

  )
}

export default Project6