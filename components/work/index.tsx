import Link from "next/link";
import styles from "./work.module.css";

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.work}>
        <ul>
          <li className={styles.work_title}>
            <strong>
              {" "}
              Core Team Member, Competions and Oppourtunities Team, Google
              Developer Students Club OAU{" "}
            </strong>
            <ul>
              <li>
                {" "}
                Working to help source and prepare community members for
                oppourtunities and competitons{" "}
              </li>
            </ul>
          </li>
          <li className={styles.work_title}>
            {" "}
            <strong> Freelance Software Developer - Fiverr</strong>
          </li>
        </ul>
      </div>

      <section className={styles.resume}>
        <Link
          href="https://drive.google.com/file/d/1khtd4EDODO77k3G0WUig3AoedHEmS_fA/view?usp=sharing"
          passHref
        >
          <a target="blank">View Resume</a>
        </Link>
      </section>

      <section className={styles.stack}>
        <div>
          <h1>Tools I work with</h1>
          <ul>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Redux Toolkit</li>
            <li>React Query</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>Git & Github</li>
          </ul>
        </div>

        <div>
          <h1>Familiar With</h1>
          <ul>
            <li>Solidity</li>
            <li>Astro</li>
            <li>RTK Query</li>
            <li>Express</li>
            <li>Linux</li>
          </ul>
        </div>
      </section>

      {/* <div className={styles.open}>
        <h1>
          Currently open to Junior (Frontend / Software) Engineering roles.
        </h1>

        <div>
          <p>
            Check out{" "}
            <Link href="https://drive.google.com/file/d/1khtd4EDODO77k3G0WUig3AoedHEmS_fA/view?usp=sharing">
              my resume/cv
            </Link>{" "}
            and <Link href="/projects">my projects</Link>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Work;
