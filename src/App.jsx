// In /src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Resume from './components/Resume';
import i18next from './i18n';

const App = () => {
    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
    };

    return (
        <div className="container">
            <Header changeLanguage={changeLanguage} />
            <Resume />
            <Footer />
        </div>
    );
};

export default App;
