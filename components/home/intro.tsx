/* eslint-disable react/no-unescaped-entities */
import { LazyMotion, m } from "framer-motion";
import Link from "next/link";
import styles from "./home.module.css";
import { useDropdown } from "../../utils/context";
import { introContainer, introItems } from "../ui/animation";
import ContactIcons from "../ui/contactIcons";
import RocketFilledIcon from "@components/ui/svg/rocketFilled";
import RocketIcon from "@components/ui/svg/rocket";
import { useRouter } from "next/router";

const loadFeatures = () =>
  import("@utils/features.js").then((res) => res.default);

const Intro = () => {
  const { dropdown, setDropdown } = useDropdown();
  const { events, pathname } = useRouter();
  return (
    <LazyMotion features={loadFeatures}>
      <m.section
        className={styles.introduction}
        variants={introContainer}
        initial="hidden"
        animate="show"
      >
        <m.h1 variants={introItems}>Philip Adewole</m.h1>

        <m.p variants={introItems} className={styles.intro}>
          Hey 👋🏾, I'm Philip, <span>Software Developer</span> with a primary
          focus on
          <span> Frontend Engineering</span> on the web for now. I mostly build
          and am interested in <span>building cool tools</span> and{" "}
          <span> solutions</span>. I find the embedded systems and the iOT space
          really cool as well and I enjoy music :)
        </m.p>

        <m.p variants={introItems} className={styles.spotify}>
          You can check out what i{" "}
          <Link href="https://open.spotify.com/user/31amv6xwz5o2euessv3leo3gxog4?si=64862c7a800f4a53">
            listen to on spotify
          </Link>
        </m.p>

        <m.div variants={introItems} className={styles.contact_intro}>
          <ContactIcons />
        </m.div>

        {/* <div className={styles.content__item}>
          <m.button
            onClick={() => setDropdown(!dropdown)}
            variants={introItems}
            className={styles.button}
          >
            <span>
              Explore
              <span
                onClick={() => setDropdown(!dropdown)}
                className={dropdown ? styles.skew : styles.unskew}
              >
                {dropdown ? <RocketFilledIcon /> : <RocketIcon />}
              </span>
            </span>
          </m.button>
        </div> */}
      </m.section>
    </LazyMotion>
  );
};

export default Intro;
