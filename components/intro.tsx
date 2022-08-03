/* eslint-disable react/no-unescaped-entities */
import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useDropdown } from "../utils/context";
import ContactIcons from "./contact_icons";

const loadFeatures = () =>
  import("../utils/features.js").then((res) => res.default);

const Intro = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.4,
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };
  const items = {
    hidden: { opacity: 0, y: 90 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const{setDropdown} = useDropdown()
  return (
    <LazyMotion features={loadFeatures}>
      <m.section
        className={styles.introduction}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.h1 variants={items}>Philip Adewole.</m.h1>

        <m.p variants={items} className={styles.intro}>
          I am a <span>Software Developer</span> primarily focused on{" "}
          <span>Frontend Engineering</span> using the web technology. Mostly
          interested in <span>building cool tools</span> and <span>solutions</span> that solve problems and/or make things easier.
          Exploring MERNstack at the moment.
        </m.p>

        <m.p variants={items} className={styles.spotify}>If you love music like i do, you can check out what i <Link href='https://open.spotify.com/user/31amv6xwz5o2euessv3leo3gxog4?si=64862c7a800f4a53'>listen to on spotify</Link></m.p>

        <m.div variants={items} className={styles.contact_intro}>
          <ContactIcons />
        </m.div>

        <div className={styles.content__item}>
          <m.button
            onClick={() => setDropdown(true)}
            variants={items}
            className={[styles.button, styles.button__bestia].join(" ")}
          >
            <div className={styles.button__bg}></div>
            <span>Explore</span>
          </m.button>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Intro;
