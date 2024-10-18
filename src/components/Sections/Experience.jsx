// In /src/components/Sections/Experience.jsx
import React from 'react';
import i18next from '../../i18n';

const Experience = () => {
    return (
        <section>
            <h2>{i18next.t('employmentHistory')}</h2>
            <div id="experienceCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h5>Freelance - Web Dev Project - BuscaMaquinaria, México</h5>
                        <p>June 2024 - October 15th 2024</p>
                        <ul>
                            <li>Managed data entry tasks for product and user information on the platform.</li>
                            <li>Developed static web pages using HTML and CSS for various pages.</li>
                        </ul>
                    </div>
                    {/* Add more carousel items for each experience */}
                    <div className="carousel-item">
                        <h5>Operations Manager - The Hidden Group, Buenos Aires</h5>
                        <p>Mar 2017 - Oct 2020</p>
                        <ul>
                            <li>Responsible for HR, Purchasing, Sales, Accounting, and Maintenance.</li>
                            <li>Implemented automated systems and process optimization.</li>
                        </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#experienceCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#experienceCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Experience;
