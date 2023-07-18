import React from 'react'
import Project from './Project'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import Project7 from './Project7'
import Project8 from './Project8'
import Project9 from './Project9'
import Project10 from './Project10'
import Project11 from './Project11'
import Project12 from './Project12'
import Project13 from './Project13'
import Project14 from './Project14'

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title">Portfolio</h2>
      <span className='section_subtitle'></span>
      <div className="portfolio_container container grid">
        <Project12 />
        <Project13 />
        <Project14 />
        <Project />
        <Project3 />
        <Project8 />
        <Project2 />
        <Project1 />
        <Project6 />
        <Project5 />
        <Project4 />
        <Project9 />
        <Project7 />
        <Project10 />
        <Project11 />
      </div>
    </section>
  )
}

export default Portfolio