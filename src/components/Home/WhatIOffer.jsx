"use client";

import { SlActionRedo } from "react-icons/sl";
import styles from "./WhatIOffer.module.css";
import { useRef } from "react";
import Link from "next/link";

const WhatIOffer = () => {
  const handleMouseEnter = (e, overlayRef) => {
    const direction = getDirection(e, overlayRef.current);
    overlayRef.current.setAttribute("data-direction", direction);
    overlayRef.current.classList.add(styles.enter);
    overlayRef.current.classList.remove(styles.leave);
  };

  const handleMouseLeave = (e, overlayRef) => {
    const direction = getDirection(e, overlayRef.current);
    overlayRef.current.setAttribute("data-direction", direction);
    overlayRef.current.classList.remove(styles.enter);
    overlayRef.current.classList.add(styles.leave);
  };

  const getDirection = (event, element) => {
    const w = element.offsetWidth;
    const h = element.offsetHeight;
    const x =
      (event.pageX -
        element.getBoundingClientRect().left -
        window.scrollX -
        w / 2) *
      (w > h ? h / w : 1);
    const y =
      (event.pageY -
        element.getBoundingClientRect().top -
        window.scrollY -
        h / 2) *
      (h > w ? w / h : 1);
    const d =
      Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
    return ["top", "right", "bottom", "left"][d];
  };

  const cards = [
    {
      title: "Body Building",
      text: "Build strength, size, and definition with our intensive bodybuilding program.",
      img: "/images/team1.png",
      alt: "Body Building Photo",
    },
    {
      title: "Muscle Gain",
      text: "Gain lean muscle mass with structured strength and hypertrophy training.",
      img: "/images/team2.png",
      alt: "Muscle Gain Photo",
    },
    {
      title: "Weight Loss",
      text: "Burn fat and boost your energy with our dynamic weight loss sessions.",
      img: "/images/team3.png",
      alt: "Weight Loss Photo",
    },
  ];

  return (
    <section className={`container ${styles.offers}`}>
      <h2 className={styles.offersTitle}>What I Offer</h2>
      <ul className={styles.offersCardsWrapper}>
        {cards.map((card, index) => {
          const overlayRef = useRef();
          return (
            <li
              key={index}
              className={styles.offersCard}
              onMouseEnter={(e) => handleMouseEnter(e, overlayRef)}
              onMouseLeave={(e) => handleMouseLeave(e, overlayRef)}
            >
              <img
                className={styles.offersCardImage}
                src={card.img}
                alt={card.alt}
              />
              <div className={styles.overlay} ref={overlayRef}>
                <div className={styles.overlayContent}>
                  <Link
                    href="/courses"
                    className={styles.cornerLink}
                    aria-label="View Courses"
                  >
                    <SlActionRedo />
                  </Link>
                </div>
              </div>
              <h3 className={styles.offersCardTitle}>{card.title}</h3>
              <p className={styles.offersText}>{card.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhatIOffer;
