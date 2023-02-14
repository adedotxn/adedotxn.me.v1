import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import styles from "./navbar.module.css";
import { useDropdown } from "../../../utils/context";
import ContactIcons from "../contactIcons";
import Navlist from "./navlist";
import RocketFilledIcon from "../svg/rocketFilled";
import RocketIcon from "../svg/rocket";
import Link from "next/link";

const Navbar = () => {
  const { dropdown, setDropdown } = useDropdown();
  const { events, pathname } = useRouter();

  const closeDropdown = useCallback(() => {
    setDropdown(false);
  }, [setDropdown]);

  // useEffect(() => {
  //   events.on("routeChangeComplete", closeDropdown);

  //   return () => {
  //     events.off("routeChangeComplete", closeDropdown);
  //   };
  // }, [events, closeDropdown]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navlist}>
          <Navlist />
        </div>
      </header>

      {/* {dropdown ? (
        <div className={styles.dropdown}>
          <Navlist />
          <div className={styles.contacts}>
            <ContactIcons />
          </div>
        </div>
      ) : null} */}
    </>
  );
};

export default Navbar;
