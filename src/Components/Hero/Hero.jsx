import styles from './Hero.module.css';
import heroImg from '../../assets/fotor-2024070221518.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import leetcodeLight from "../../assets/leetcode-light.svg";
import leetcodeDark from "../../assets/leetcode-dark.svg";
import CV from '../../assets/Lakhan_resume.pdf';
import { useTheme } from '../../Context/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const leetcodeIcon = theme === 'light' ? leetcodeDark : leetcodeLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Lakhan
          <br />
          Garg
        </h1>
        <h2>MERN Developer</h2>
        <span>
      
          <a href="https://github.com/Lakhangarg18" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/lakhangarg18/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://leetcode.com/u/lakhangarg18/" target="_blank">
            <img src={leetcodeIcon} alt="LeetCode icon" />
          </a>
        </span>
        <p className={styles.description}>
        Eager to apply knowledge
        and build high-quality, scalable web applications."
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
