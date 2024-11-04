import './App.css';
import deepublishImage from './assets/Deepublish.jpg';
import sematImage from './assets/Sematdel.jpg';
import dinoImage from './assets/Dino.jpg';

const projects = [
  { title: 'Project Deepublish', description: 'Description of project 1', link: '#', image: deepublishImage },
  { title: 'Project SEMAT', description: 'Description of project 2', link: '#', image: sematImage },
  { title: 'Project Dino Pedia', description: 'Description of project 3', link: '#', image: dinoImage },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>My Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
