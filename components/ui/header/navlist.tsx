import Link from "next/link";
import { useRouter } from "next/router";
import ArrowTopRightIcon from "../svg/arrowtopright";
import styles from "./navlist.module.css";

const Navlist = () => {
  const router = useRouter();

  const activeLinks = [styles.active, styles.link, styles.link_anim].join(" ");
  const inactiveLinks = [styles.link, styles.link_anim].join(" ");

  return (
    <ul>
      <li className={router.pathname === "/" ? activeLinks : inactiveLinks}>
        <Link href="/"> Home </Link>
      </li>

      <li
        className={
          router.pathname === "/projects" ? activeLinks : inactiveLinks
        }
      >
        <Link href="/projects"> Projects</Link>
      </li>

      <li className={router.pathname === "/work" ? activeLinks : inactiveLinks}>
        <Link href="/work">Work</Link>
      </li>

      <li style={{ color: "#d0cfcf" }} className={inactiveLinks}>
        <Link href="https://github.com/adedotxn">
          <a target="_blank">GitHub</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navlist;
