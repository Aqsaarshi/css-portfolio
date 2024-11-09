"use client";
import React from "react";
import Image from "next/image";
import aqsapic from "../public/aqsapic.jpg";
import Typewriter from "typewriter-effect";
import styles from "./Hero.module.css"; // Import the CSS module

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Welcome to my Portfolio
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Graphic Designer",
                  "Data Analyst",
                  "Video Editor",
                  "Digital Marketing",
                  "Sales Representative",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className={styles.heroDivider}></div>
          <p className={styles.heroDescription}>
            Hello, I am Aqsa, a GIAIC student specializing in Artificial
            Intelligence, Web3.0, and Metaverse technologies. I have hands-on
            experience with HTML, CSS, and TypeScript, and I am currently
            expanding my expertise by learning Next.js. My passion lies in
            building innovative solutions at the intersection of modern web
            development and emerging technologies.
          </p>
          <div className={styles.heroButtonContainer}>
            <a href="#Contact">
              <button className={styles.heroButton}>Contact</button>
            </a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <Image
            className="object-cover object-center rounded mx-auto w-[15rem]"
            alt="hero"
            width={300}
            height={300}
            src={aqsapic}
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
