import React from "react";
import Image from "next/image";
import projectImg from "../public/project.png";
import styles from "./Project.module.css";

const Project = () => {
  return (
    <div id="Project">
      <section className={styles.projectSection}>
        <div className={styles.projectContainer}>
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className={styles.projectTitle}>My Projects</h1>
            <p className={styles.projectDescription}>
              A web app that allows users to create and customize professional
              resumes with ease. Built with Next.js and responsive design for
              optimal user experience.
            </p>
          </div>
          <div className="flex justify-center bg-slate-400">
            {/* Project */}
            <div className={styles.projectItem}>
              <div className="flex relative">
                <Image
                  alt="Project Thumbnail"
                  className={styles.projectItemImage}
                  src={projectImg}
                />
                <div className={styles.projectContent}>
                  <h2 className={styles.projectCategory}>
                    Resume Builder Project
                  </h2>
                  <h1 className={styles.projectTitleText}>RESUME BUILDER</h1>
                  <p className={styles.projectDescriptionText}>
                    The Normal Resume Builder is a web app that allows users to
                    create professional resumes easily. Users input their
                    information through intuitive forms, generating a structured
                    resume ready for copying or printing.
                  </p>
                  <a
                    target="_blank"
                    href="https://resumebuilder-byaqsaarshad.vercel.app/"
                    rel="noopener noreferrer"
                  >
                    <p className={styles.projectLink}>View Project</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
