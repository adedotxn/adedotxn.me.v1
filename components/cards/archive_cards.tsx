import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/archive_cards.module.css";
import { ArchiveProjects } from "../../utils/data";
import Link from "next/link";
import { LazyMotion, m } from "framer-motion";
import { ProjectsWithoutStack } from "../../utils/interface";
import LiveSvg from "../svg/live";
import GithubSvg from "../svg/github";
import { projectContainer } from "../animation/animation";

const loadFeatures = () => import("../../utils/features.js").then((res) => res.default);

const ArchiveCard: FC = () => {
  return (
    <>
      <div className={styles.archive_container}>
        {ArchiveProjects?.map((project) => {
          return <Cards key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

const Cards: FC<{ project: ProjectsWithoutStack }> = ({ project }) => {
  return (
    <LazyMotion features={loadFeatures}>
      <m.section
        className={styles.archive}
        animate="show"
        initial="hidden"
        variants={projectContainer}
      >
        <div>
          {project.livelink ? (
            <h3>
              <Link href={`${project?.livelink?.href}`}>
                <a target="blank"> {project.name} </a>
              </Link>
            </h3>
          ) : (
            <h3>
              <Link href={`${project?.gitlink?.href}`}>
                <a target="blank"> {project.name} </a>
              </Link>
            </h3>
          )}
          <p>{project.details}</p>
          
          {/* Project Links */}
          {/* Github */}
          <div className={styles.viewing}>
            {project?.gitlink?.href && (
              <div>
                <Link href={`${project?.gitlink?.href}`}>
                  <a target="blank">
                    <GithubSvg />
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
                    <LiveSvg />
                    <span>Live Site</span>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default ArchiveCard;
