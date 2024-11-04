import './App.css';
import profilePic from './assets/cindyy.jpg';

function Intro() {
  return (
    <section id="intro" className="intro">
      <div className="intro-content">
        <div className="intro-image">
        <img src={profilePic} alt="Cindy Feronica" className="square-image" />
        </div>
        <div className="intro-text">
          <h2>Welcome to My Portfolio</h2>
          <p>
            Hi, I'm Cindy Feronica Simangunsong. I am a talented Quality Assurance (QA)
            Specialist and experienced Web Developer with an educational background in Informatics. 
            With expertise in web development and software testing, I have successfully ensured the quality 
            and reliability of various web applications. I have a deep understanding of testing methodologies 
            and the ability to quickly and effectively identify and resolve issues. In my role as a QA Specialist, 
            I have utilized various tools and techniques to test web applications, including Postman for API testing 
            and various automation tools for regression testing. I also have experience managing database schemas 
            using PostgreSQL and MySQL, ensuring smooth integration between front-end and back-end systems 
            through the use of AJAX.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
