import Link from "next/link";
// import Projects from "../components/projects";
import ProjectCard from "../components/cards/project_cards";
import styles from "../styles/project.module.css";

const Projects = () => {
  return (
    <div className={styles.content}>
      <section id="projects" className={styles.projects}>
        <h1>Featured Projects</h1>

        <div className={styles.cards}>
          <ProjectCard />
        </div>

        <div className={styles.more}>
          <h2>If you`d like to see more </h2>

          <div className={styles.more__links}>
            <span>
              <Link href="/archive"> View Archive.</Link>{" "}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
