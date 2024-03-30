import React from 'react';
import "./about.css";
import AboutImg from "../../assets/profile.jpeg";
import CV from "../../assets/Namratha_shivaraju_resume_.pdf"; 
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me </h2>
        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">
                <p className="about_description"> 
                <br></br>
                Hi! I am a developer with a passion for creating innovative digital products. I have a strong background in (Front-end) web development, training models, software development and UI/UX Design. I am always seeking new challenges and opportunities to grow my skills.
<br></br> <br></br>
As a big fan of anime, I understand the importance of storytelling and user experience in creating engaging and meaningful products. I am looking to join a team where I can combine my technical and creative skills to build amazing products that delight users.
                </p>
                <Info />
                <a download="" href={CV} className="button button--flex">Download Resume</a>


            </div>
        </div> 
    </section>
  )
}

export default About
