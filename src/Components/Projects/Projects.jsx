import styles from './Projects.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../Context/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Lakhangarg18/Mern-Blog"
          h3="Blogspot"
          p="A mern based blog app"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Lakhangarg18/Chess.com-Clone"
          h3="ChillWithChess"
          p="A chess.com clone app"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Lakhangarg18/Khatabook"
          h3="KhataBook"
          p="Expense Management Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Lakhangarg18/Image-Creator"
          h3="Imagine Images"
          p="A backend based image website"
        />
      </div>
    </section>
  );
}

export default Projects;
