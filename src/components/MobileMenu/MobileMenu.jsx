"use client";

import Link from "next/link";
import styles from "./MobileMenu.module.css";
import { useEffect, useState } from "react";

const MobileMenu = ({onClose}) => {
  const [isExiting, setIsExiting] = useState(false);

   useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleClose = () => {
    if (isExiting) return; // захист від повторного натискання
    setIsExiting(true);

    // Дати час анімації спрацювати
    setTimeout(() => {
      onClose(); // видаляє меню з DOM
    }, 500); // тривалість має відповідати animation-duration
  };

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div
        className={`${styles.mobileMenu} ${isExiting ? styles.exit : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className={styles.navMobile}>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Courses", "/courses"],
            ["Pricing", "/pricing"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={styles.navLink}
              onClick={handleClose}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
