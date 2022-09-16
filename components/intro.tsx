/* eslint-disable react/no-unescaped-entities */
import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useDropdown } from "../utils/context";
import { introContainer, introItems } from "./animation/animation";
import ContactIcons from "./contact_icons";

const loadFeatures = () =>
  import("../utils/features.js").then((res) => res.default);

const Intro = () => {
 

  const{setDropdown} = useDropdown()
  return (
    <LazyMotion features={loadFeatures}>
      <m.section
        className={styles.introduction}
        variants={introContainer}
        initial="hidden"
        animate="show"
      >
        <m.h1 variants={introItems}>Philip Adewole.</m.h1>

        <m.p variants={introItems} className={styles.intro}>
          I am a <span>Software Developer</span> with a primary focus on
          <span> Frontend Engineering</span> with the web technology. I mostly build and am
          interested in <span>building cool tools</span> and <span> solutions</span> that solve problems and/or make things easier.
          Exploring MERNstack at the moment.
        </m.p>

        <m.p variants={introItems} className={styles.spotify}>If you love music like i do, you can check out what i <Link href='https://open.spotify.com/user/31amv6xwz5o2euessv3leo3gxog4?si=64862c7a800f4a53'>listen to on spotify</Link></m.p>

        <m.div variants={introItems} className={styles.contact_intro}>
          <ContactIcons />
        </m.div>

        <div className={styles.content__item}>
          <m.button
            onClick={() => setDropdown(true)}
            variants={introItems}
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
