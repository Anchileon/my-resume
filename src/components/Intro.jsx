// In /src/components/Intro.jsx
import React from 'react';
import i18next from '../i18n';
import profilePic from '../assets/Captura de pantalla 2024-10-14 142131.png'; // Make sure to add your image here

const Intro = () => {
    return (
        <section className="text-center my-5">
            <img src={profilePic} alt="Profile" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
            <h1>{i18next.t('welcome')}</h1>
            <p className="lead">
                Passionate about technology and continuous learning. My goal is to leverage my skills in web development and management to create impactful solutions.
            </p>
        </section>
    );
};

export default Intro;
