"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTopBtn.module.css";
import { FaLevelUpAlt } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button className={styles.scrollTopBtn} onClick={scrollToTop}>
      <FaLevelUpAlt />
    </button>
  );
}

export default ScrollToTopBtn;
