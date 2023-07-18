import React from 'react'

const Card = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
      <i class="uil uil-envelope about_icon"></i>
        <h3 className="about_title">Email</h3>
        <span className="about_subtitle">nam07@uw.edu   |   s.namratha0705@gmail.com</span>
      </div>

      <div className="about_box">
      <i class="uil uil-phone about_icon"></i>
        <h3 className="about_title">Phone</h3>
        <span className="about_subtitle">+1 206-423-5701</span>
      </div>

      <div className="about_box">
      <i class="uil uil-location-point about_icon"></i>
        <h3 className="about_title">Location</h3>
        <span className="about_subtitle">Seattle, Washington</span>
      </div>

    </div>
  )
}

export default Card