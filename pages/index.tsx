import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import About from "../components/about";
// import Projects from '../components/projects'
import ContactIcons from "../components/contact_icons";
import Intro from "../components/intro";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.left}>
          <div>
            <ContactIcons />
          </div>

          <div></div>
        </div>

        <div className={styles.content}>
          <Intro />
        </div>

        <div className={styles.right}>
          <div>
            <Link href="mailto:adedotxn.dev@gmail.com">
              <a target="blank">adedotxn.dev@gmail.com</a>
            </Link>
          </div>
        </div>
      </main>

      {/* <footer >
        <p>Inspired by <span><Link href="https://brittanychiang.com">brittanychiang.com</Link></span>  </p>
      </footer> */}
    </div>
  );
};

export default Home;
