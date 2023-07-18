import React from 'react';
import Card from './Card';
import "../about/about.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <span className="section_subtitle">Contact Me</span>
      <div className="contact_container container grid">
        <Card />
      </div>
    </section>
  )
}

export default Contact