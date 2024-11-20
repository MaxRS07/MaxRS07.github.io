import '../styles/App.css';
import Socials from './Socials';
import downArrow from '../assets/down-arrow.svg';
import { scrollToSection } from './Navbar';

function Home() {
    return (
        <header className="App-header" id="home">
            <div className="App-main-left">
                <h1>
                    Max Siebengartner <br />
                    <span className="App-colored-text">Bottom Text</span>
                </h1>
                <div className="App-down-arrow">
                    <button onClick={() => scrollToSection('about')}>
                        <img src={downArrow} alt="Down Arrow" />
                    </button>
                </div>
            </div>
            <Socials />
        </header>
    );
}

export default Home; 