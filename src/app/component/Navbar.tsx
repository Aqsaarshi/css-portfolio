import React from "react";
import Image from "next/image";
import aqsapic from "../public/aqsapic.jpg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <header className={styles.navbarHeader}>
        <div className={styles.navbarContainer}>
          <a className={styles.navbarLogo}>
            <Image
              src={aqsapic}
              alt="AQSA ARSHAD"
              width={100}
              height={100}
              className={styles.navbarLogoImage}
            />
            <span className={styles.navbarLogoText}>AQSA ARSHAD</span>
          </a>
          <nav className={styles.navbarNav}>
            <a href="#" className={styles.navbarNavLink}>
              Home
            </a>
            <a href="#Project" className={styles.navbarNavLink}>
              Project
            </a>
            <a href="#About" className={styles.navbarNavLink}>
              About
            </a>
            <a href="#Contact" className={styles.navbarNavLink}>
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
