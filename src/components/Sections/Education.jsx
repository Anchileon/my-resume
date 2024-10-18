// In /src/components/Sections/Education.jsx
import React from 'react';
import i18next from '../../i18n';

const Education = () => {
    return (
        <section>
            <h2>{i18next.t('education')}</h2>
            <ul>
                <li>CoderHouse — Desarrollo Full Stack (Ene 2024 - cursando)</li>
                <p>Currently pursuing a Full Stack Development degree, acquiring knowledge in web development with HTML, CSS, JavaScript, ReactJS, Backend programming, SQL, manual QA testing, and Cloud Computing (AWS).</p>
                <li>UADE -IAG — BD in Management (2015-2019)</li>
                <li>Sworn Junior College (1993 - 2009)</li>
            </ul>
        </section>
    );
};

export default Education;
