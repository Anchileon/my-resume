// In /src/components/Sections/Projects.jsx
import React from 'react';
import i18next from '../../i18n';

const Projects = () => {
    return (
        <section>
            <h2>{i18next.t('projects')}</h2>
            <ul>
                <li>
                    <a href="https://github.com/Anchileon" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </li>
                {/* Add more project links if needed */}
            </ul>
        </section>
    );
};

export default Projects;
