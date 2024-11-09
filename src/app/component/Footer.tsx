import React from "react";
import { FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import aqsapic from "../public/aqsapic.jpg"; // Import the image
import Image from "next/image";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="text-gray-600 body-font">
        <div className={styles.footerContainer}>
          <a className={styles.footerLogo}>
            <Image
              src={aqsapic} // Use the imported image
              alt="AQSA ARSHAD"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className={styles.footerLogoText}>AQSA ARSHAD</span>
          </a>
          <p className={styles.footerText}>© 2024 AQSA ARSHAD —</p>
          <span className={styles.footerIcons}>
            <a
              href="https://www.youtube.com/@aqsaarshi9916"
              className={styles.footerIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aqsa's YouTube Channel"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aqsaarshi5/"
              className={styles.footerIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aqsa's LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/khubsuratarar/"
              className={styles.footerIcon}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Aqsa's Instagram Profile"
            >
              <FaInstagramSquare size={24} />
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
