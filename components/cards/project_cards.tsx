import Link from "next/link";
import { FC } from "react";
import { Featured } from "../../utils/data";
import styles from "../../styles/project_cards.module.css";
import { ProjectsInterface } from "../../utils/interface";
import GithubSvg from "../svg/github";
import LiveSvg from "../svg/live";

const Card: FC<{ project: ProjectsInterface }> = ({ project }) => {
  return (
    <div key={project.id} className={styles.card}>
      {/* Name */}
      <div className={styles.top}>
        {project.livelink ? (
          <h2>
            <Link href={`${project?.livelink?.href}`}>
              <a target="blank"> {project.name} </a>
            </Link>
          </h2>
        ) : (
          <h2>
            <Link href={`${project?.gitlink?.href}`}>
              <a target="blank"> {project.name} </a>
            </Link>
          </h2>
        )}

        {/* <div>
          <button className={styles.tag} disabled>
            {project.tag}
          </button>
        </div> */}
      </div>

      {/* Project Details */}
      <p>{project.details}</p>

      {/* Stack */}
      <div className={styles.stack_container}>
        <ul className={styles.stack}>
          {project.stack.map((stack) => (
            <li key={stack}>{stack}</li>
          ))}
        </ul>
      </div>

      {/* Project Links */}

      {/* Github */}
      <div className={styles.viewing}>
        {project?.gitlink?.href && (
          <div>
            {/* <GithubSvg /> */}
            <Link href={`${project?.gitlink?.href}`}>
              <a target="blank">
                <span>Code</span>
              </a>
            </Link>
          </div>
        )}

        {/* Livesite */}
        {project?.livelink?.href && (
          <div>
            <Link href={`${project?.livelink?.href}`}>
              <a target="blank">
                {/* <LiveSvg /> */}
                <span>Live Site</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard: FC = () => {
  return (
    <>
      <div className={styles.container}>
        {Featured.map((project) => {
          return <Card key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

export default ProjectCard;
