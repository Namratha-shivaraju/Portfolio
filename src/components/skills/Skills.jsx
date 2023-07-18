import React from 'react';
import "./skills.css";
import Programming from './Programming';
import UiUx from './UiUx';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className='section_subtitle'></span>
      <div className="skills_container container grid">
        <Programming />
        <UiUx />
      </div>
    </section>

  )
}

export default Skills