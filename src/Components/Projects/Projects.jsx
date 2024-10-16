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
          link="https://github.com/Lakhangarg18/Blogspot"
          h3="Blogspot"
          p="Blogs App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Lakhangarg18/Expense-Tracker"
          h3="Expenser"
          p="Expense Management"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Lakhangarg18/Social-Post-App"
          h3="Social"
          p="Social App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Lakhangarg18/Todo-App"
          h3="Toddler"
          p="Todo App"
        />
      </div>
    </section>
  );
}

export default Projects;
