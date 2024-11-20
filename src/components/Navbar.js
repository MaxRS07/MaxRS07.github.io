import '../styles/Navbar.css';
import React, { useEffect, useState } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const closest = getScrollElement();
            if (closest) {
                setActiveSection(closest.id);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    return (
        <div className="nav-container">
            <nav className="nav">
                <div className="nav-links">
                    <button
                        className={activeSection === 'home' ? 'button-active' : 'button-inactive'}
                        onClick={() => scrollToSection('home')}>Home</button>
                    <button
                        className={activeSection === 'about' ? 'button-active' : 'button-inactive'}
                        onClick={() => scrollToSection('about')}>About</button>
                    <button
                        className={activeSection === 'skills' ? 'button-active' : 'button-inactive'}
                        onClick={() => scrollToSection('skills')}>Skills</button>
                    <button
                        className={activeSection === 'projects' ? 'button-active' : 'button-inactive'}
                        onClick={() => scrollToSection('projects')}>Projects</button>
                    <button
                        className={activeSection === 'contact' ? 'button-active' : 'button-inactive'}
                        onClick={() => scrollToSection('contact')}>Contact</button>
                </div>
            </nav>
        </div>
    );
}
function scrollToSection(section) {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
}
function getScrollElement() {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let closestElement = null;
    let minDistance = Infinity;

    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        const absoluteTop = element.getBoundingClientRect().top + window.scrollY;
        const distance = Math.abs(absoluteTop - window.scrollY);

        if (distance < minDistance) {
            minDistance = distance;
            closestElement = element;
        }
    });

    return closestElement;
}

export { scrollToSection };
export default Navbar;