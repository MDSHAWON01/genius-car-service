import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center">
            <p>copyright by © {year}</p>
        </footer>
    );
};

export default Footer;