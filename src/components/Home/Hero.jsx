"use client";

import { useEffect, useState } from "react";
import AnimatedLinkFill from "../AnimatedLinkFill/AnimatedLinkFill";
import styles from "./Hero.module.css";

const Hero = () => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateSpan, setAnimateSpan] = useState(false);
  const [animateLink, setAnimateLink] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateTitle(true), 100);
    setTimeout(() => setAnimateSpan(true), 400);
    setTimeout(() => setAnimateLink(true), 500);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <h1
          className={`${styles.heroTitle} ${
            animateTitle ? styles.fadeInLeft : ""
          }`}
        >
          Hi this is Zacson
          <br />
          <span
            className={`${styles.titleSpan} ${
              animateSpan ? styles.fadeInLeftDelayed : ""
            }`}
          >
            Gym Trainer
          </span>
        </h1>

        <AnimatedLinkFill
          className={`${styles.coursesLink} ${
            animateLink ? styles.fadeInLeftDelayed : ""
          }`}
          variant="fill"
          href="/courses"
        >
          My Courses
        </AnimatedLinkFill>
      </div>
    </section>
  );
};

export default Hero;
