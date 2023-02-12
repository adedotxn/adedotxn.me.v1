import ContactIcons from "@components/ui/contactIcons";
import Link from "next/link";
import styles from "./home.module.css";
import Intro from "./intro";

const Home = () => {
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
    </div>
  );
};

export default Home;
