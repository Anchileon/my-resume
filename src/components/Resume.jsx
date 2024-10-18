// In /src/components/Resume.jsx
import React from 'react';
import Intro from './Intro';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Education from './Sections/Education';
import Skills from './Sections/Skills';
import EmploymentHistory from './Sections/Experience';

const Resume = () => {
    return (
        <div>
            <Intro />
            <Experience />
            <Projects />
            <Education />
            <Skills />
        </div>
    );
};

export default Resume;
