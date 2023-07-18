import React from 'react';
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section_title">Experience</h2>
        <span className="section_subtitle"></span>

        <div className="qualification_container container">
            <div className="qualification_sections">
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Data Analyst Intern</h3>
                            <span className="qualification_subtitle">Deloitte USI, Bangalore</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> January 2022 - June 2022
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Web Developer Intern</h3>
                            <span className="qualification_subtitle">Airports Authority of India, Bangalore</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> May 2021 - July 2021
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">UI/UX Designer and Software Developer Intern</h3>
                            <span className="qualification_subtitle">IsoPort Chamber Pvt Ltd, Mumbai</span>
                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> May 2021 - July 2021
                            </div>

                        </div>

                    </div>
                </div>
            </div>
    </section>
  )
}

export default Qualification