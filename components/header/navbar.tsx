import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/navbar.module.css";
import { useDropdown } from "../../utils/context";
import ContactIcons from "../contact_icons";
import Navlist from "./nav_list";

const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false);
  const {dropdown, setDropdown} = useDropdown()
  const { events } = useRouter();

  const closeDropdown = useCallback(() => {
    setDropdown(false);
  },[setDropdown]);

  useEffect(() => {
    events.on("routeChangeComplete", closeDropdown);

    return () => {
      events.off("routeChangeComplete", closeDropdown);
    };
  }, [events,closeDropdown]);

  return (
    <>
      <header className={styles.header}>
        <h1>
          <Link href="/"> adedotxn.</Link>
        </h1>

        <div className={styles.burger} onClick={() => setDropdown(!dropdown)}>
          <div className={dropdown ? "burger burger-squeeze open": "burger burger-squeeze"} >
            <div className="burger-lines"></div>
          </div>
        </div>

        <div className={styles.navlist}>
          <Navlist />
        </div>
      </header>

      {dropdown && (
        <div className={styles.dropdown}>
          <Navlist />
          <div className={styles.contacts}>
            <ContactIcons/>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
