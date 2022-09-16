import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/navlist.module.css";

const Navlist = () => {
  const router = useRouter();
  return (
    <>
      <ul>
        <li
          className={
            router.pathname === "/"
              ? [styles.active, styles.link, styles.link_anim].join(" ")
              : [styles.link, styles.link_anim].join(" ")
          }
        >
          <Link href="/"> Home </Link>
        </li>

        <li
          className={
            router.pathname === "/projects"
              ? [styles.active, styles.link, styles.link_anim].join(" ")
              : [styles.link, styles.link_anim].join(" ")
          }
        >
          <Link href="/projects"> Projects</Link>
        </li>

        <li
          className={
            router.pathname === "/work"
              ? [styles.active, styles.link, styles.link_anim].join(" ")
              : [styles.link, styles.link_anim].join(" ")
          }
        >
          <Link href="/work">Work</Link>
        </li>

        <li className={[styles.link, styles.link_anim].join(" ")}>
          <Link href="https://github.com/adedotxn">
            <a target="_blank">Github</a>
          </Link>
        </li>

        <li>
          <button className={[styles.button, styles.button__mimas].join(" ")}>
            <Link
              href="https://drive.google.com/file/d/1khtd4EDODO77k3G0WUig3AoedHEmS_fA/view?usp=sharing"
              passHref
            >
              <a target="blank">
                <span>Resume</span>
              </a>
            </Link>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navlist;
