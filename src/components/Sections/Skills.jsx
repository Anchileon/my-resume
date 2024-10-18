// In /src/components/Sections/Skills.jsx
import React from 'react';
import i18next from '../../i18n';

const Skills = () => {
    return (
        <section>
            <h2>{i18next.t('skills')}</h2>
            <ul>
                <li>Web Development: HTML, CSS, JavaScript, ReactJS</li>
                <li>Version control: Git, GitHub</li>
                <li>Management Tools: Microsoft Office, ORACLE and other management systems</li>
            </ul>
        </section>
    );
};

export default Skills;
