import { FC } from "react";
import Link from "next/link";
import styles from "./projectCards.module.css";
import { ProjectsInterface } from "@utils/interface";
import { Featured } from "@utils/data";

const Card: FC<{ project: ProjectsInterface }> = ({ project }) => {
  return (
    <div key={project.id} className={styles.card}>
      <h2>{project.name}</h2>
      <p>{project.details}</p>

      <ul className={styles.stack}>
        {project.stack.map((stack) => (
          <li key={stack}>{stack}</li>
        ))}
      </ul>

      {/* Github */}
      <div className={styles.links}>
        {project?.gitlink?.href ? (
          <div>
            <Link href={`${project?.gitlink?.href}`}>
              <a target="blank">
                <span>Code</span>
              </a>
            </Link>
          </div>
        ) : null}

        {/* Livesite */}
        {project?.livelink?.href ? (
          <div>
            <Link href={`${project?.livelink?.href}`}>
              <a target="blank">
                <span>Live Site</span>
              </a>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const ProjectCard: FC = () => {
  return (
    <div className={styles.container}>
      {Featured.map((project) => {
        return <Card key={project.id} project={project} />;
      })}
    </div>
  );
};

export default ProjectCard;
