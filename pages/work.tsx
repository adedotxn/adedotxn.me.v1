import Link from "next/link";
import styles from "../styles/work.module.css";

const Work = () => {
  return (
    <div className={styles.container}>
      <section className={styles.stack}>
        <div>
          <h1>Core Stack & Tools</h1>
          <ul>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Solidity</li>
            <li>Git & Github</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div>
          <h1>Familiar With</h1>
          <ul>
            <li>MongoDB</li>
            <li>Node</li>
            <li>Express</li>
            <li>Linux</li>
          </ul>
        </div>
      </section>

      <div className={styles.open}>
        <h1>Currently open to Junior or Intern Software Dev/Engineering roles.</h1>

        <div>
          <p>
            Check out
            <Link href="https://drive.google.com/file/d/1SspjX3pFynhnzA1uL6TS9pNRYAyIwdCu/view?usp=sharing"> my resume/cv</Link> and <br />
            <Link href="/projects">my projects</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;