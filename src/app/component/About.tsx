import React from "react";
import { MdDownload } from "react-icons/md";
import Image from "next/image";
import cvpic from "../public/cvpic.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <div id="About">
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.cvImage}
              alt="hero"
              width="300"
              height="300"
              src={cvpic}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
              About Me
              <br className={styles.hiddenLine} />
            </h1>
            <p className={styles.description}>
              Hi, I am Aqsa! I am currently pursuing studies in Artificial
              Intelligence, Web3.0, and Metaverse through GIAIC. With a
              background in web development, I have hands-on experience in HTML,
              CSS, TypeScript, and I am currently expanding my skill set with
              Next.js. I have also developed practical knowledge in Excel,
              marketing, and video editing through various projects and
              internships. Recently, I built a Resume Builder project,
              showcasing my ability to design functional web tools.
              Additionally, my work experience in DME, CGM sectors, and call
              centers has strengthened my customer service and problem-solving
              skills. I love exploring emerging technologies and am passionate
              about creative projects, like making presentations and working
              with PowerPoint.
            </p>
            <div className={styles.buttonContainer}>
              {/* The download attribute makes the file downloadable */}
              <a href="/assets/cv.pdf" download>
                <button className={styles.cvButton}>
                  View CV
                  <MdDownload />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
