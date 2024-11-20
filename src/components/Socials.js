import linkedin from '../assets/social-icons/linkedin.svg';
import github from '../assets/social-icons/github-mark-white.svg';
import instagram from '../assets/social-icons/instagram.svg';
import '../styles/Socials.css';

function Socials() {
    return (
        <div className="Socials-container">
            <a href="https://www.linkedin.com/in/max-siebengartner-bb5aa22a9/" target="_blank" rel="noopener noreferrer">
                <img className="Socials-icon" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/MaxRS07" target="_blank" rel="noopener noreferrer">
                <img className="Socials-icon" src={github} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/maxsiebengartner/" target="_blank" rel="noopener noreferrer">
                <img className="Socials-icon Socials-inverted" src={instagram} alt="Instagram" />
            </a>
        </div>
    );
}

export default Socials; 