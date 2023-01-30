import React from 'react';
import "./footer.css"
;
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Namratha</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Portfolio</a>
                </li>

                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>
            </ul>

            <div className="footer_social">
            <a href="https://www.instagram.com/nam_ra_t_ha/" className="footer_social-link" target="_blank" rel="noreferrer">
            <i class='bx bxl-instagram-alt' ></i>
            </a>

            <a href="https://github.com/Namratha-shivaraju" className="footer_social-link" target="_blank" rel="noreferrer">
            <i class='bx bxl-github' ></i>
            </a>

            <a href="https://www.linkedin.com/in/namratha-shivaraju/" className="footer_social-link" target="_blank" rel="noreferrer">
            <i class='bx bxl-linkedin-square' ></i>
            </a>
            </div>

            <span className="footer_copy">&#169; Namratha Shivaraju. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer