// In /src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-4">
    <p>&copy; {new Date().getFullYear()} Ignacio León. All rights reserved.</p>
    <p>
        <a href="mailto:ignacioleon24@gmail.com">Email</a> | 
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </p>
</footer>
    );
};

export default Footer;
