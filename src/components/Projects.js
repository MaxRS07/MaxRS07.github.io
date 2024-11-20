import '../styles/Project.css';
import github from '../assets/social-icons/github-mark-white.svg';
function Projects() {
    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <p>I've worked on a variety of projects, from web apps to mobile apps to games.</p>
            <CardGallery />
        </div>
    );
}
class Card {
    name;
    text;
    url;
    image;
    constructor(name, text, url, image) {
        this.name = name;
        this.text = text;
        this.url = url;
        this.image = image;
    }
}
function CardGallery() {
    const cards = [
        new Card("Game", "A game I made text text text text", "https://github.com/", "https://via.placeholder.com/150"),
        new Card("Game", "A game I made", "https://github.com/", "https://via.placeholder.com/150"),
        new Card("Game", "A game I made", "https://github.com/", "https://via.placeholder.com/150"),
        new Card("Game", "A game I made", "https://github.com/", "https://via.placeholder.com/150"),
    ];
    return (
        <div className="card-gallery">
            {cards.map((card, index) => (
                <ProjectCard name={card.name} text={card.text} url={card.url} image={card.image} key={index} />
            ))}
        </div>
    );
}
function ProjectCard({ name, text, url, image }) {
    return (
        <div className="project-card">
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>{text}</p>
            <div className="project-card-links">
                <a href={url} target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
            </div>
        </div>
    );
}

export default Projects;