import python from '../assets/skill-icons/python.svg';
import react from '../assets/skill-icons/react.svg';
import rust from '../assets/skill-icons/rust.svg';
import swift from '../assets/skill-icons/swift.svg';
import csharp from '../assets/skill-icons/csharp.svg';
import flutter from '../assets/skill-icons/flutter.svg';
import javascript from '../assets/skill-icons/javascript.svg';
import unity from '../assets/skill-icons/unity.svg';
import dotnet from '../assets/skill-icons/dotnet.svg';
import zumi from '../assets/skill-icons/zumi.png';
import c from '../assets/skill-icons/c.svg';
import html from '../assets/skill-icons/html.svg';
import css from '../assets/skill-icons/CSS.svg';

import '../styles/Skills.css';

function Skills() {
    return (
        <div className="skills-wrapper">
            <div className="skills-container">
                <IconGallery skillType="language" />
                <IconGallery skillType="framework" />
                <IconGallery skillType="tool" />
            </div>
            <div className="skills-header">
                <h1>Skills</h1>
                <p1>I have experience with web development, mobile app development, and some game development. I also have experience with AI in Python and Raspberry Pi.</p1>
            </div>
        </div>
    );
}

function IconBox({ icon, alt, url }) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="img-container">
                <img
                    src={icon}
                    alt={alt}
                    style={alt === "Flutter" ? { transform: "translateX(-5%)" } : alt === "Unity" ? { transform: "translateX(-5%)" } : {}}
                ></img>
            </div>
        </a>
    );
}
function IconGallery({ skillType }) {

    const languages = [[python, "Python", "https://www.python.org/"], [rust, "Rust", "https://www.rust-lang.org/"], [c, "C", "https://www.learn-c.org/"], [swift, "Swift", "https://www.swift.org/"], [csharp, "C#", "https://docs.microsoft.com/en-us/dotnet/csharp/"], [javascript, "JavaScript", "https://www.javascript.com/"], [css, "CSS", "https://en.wikipedia.org/wiki/CSS"], [html, "HTML", "https://en.wikipedia.org/wiki/HTML"]];
    const frameworks = [[react, "React", "https://react.dev/"], [flutter, "Flutter", "https://flutter.dev/"], [dotnet, ".NET", "https://dotnet.microsoft.com/"], []];
    const tools = [[zumi, "Zumi", "https://www.robolink.com/products/zumi"], [unity, "Unity", "https://unity.com/"], ["https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg", "Git", "https://git-scm.com/"]];
    return (
        <div className="icon-gallery-container">
            <h2>{skillType === "language" ? "Languages" : skillType === "framework" ? "Frameworks" : "Tools"}</h2>
            <div className="icon-gallery">
                {skillType === "language" ? (
                    languages.map(([image, alt, url]) => (
                        <IconBox icon={image} alt={alt} url={url} />
                    ))
                ) : skillType === "framework" ? (
                    frameworks.map(([image, alt, url]) => (
                        <IconBox icon={image} alt={alt} url={url} />
                    ))
                ) : (
                    tools.map(([image, alt, url]) => (
                        <IconBox icon={image} alt={alt} url={url} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Skills;