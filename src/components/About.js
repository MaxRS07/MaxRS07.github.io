import '../styles/About.css';
import me from '../assets/me.png';
function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>I'm a 17 year old student at HKIS, instested in software engineering and AI.</p>
            <div className="about-image-container">
                <img src={me} alt="me" />
            </div>
        </div>
    );
}
export default About;