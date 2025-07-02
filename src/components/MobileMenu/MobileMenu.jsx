"use client";

import styles from "./MobileMenu.module.css";
import { useEffect, useState } from "react";

const MobileMenu = ({ isOpen, onCloseComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const navData = [
    ["Home", "/"],
    ["About", "/about"],
    ["Courses", "/courses"],
    ["Pricing", "/pricing"],
    ["Gallery", "/gallery"],
    ["Contact", "/contact"],
    ["Message me", "/message"],
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleClose = () => {
    if (isExiting) return;
    setIsExiting(true);

    setTimeout(() => {
      onCloseComplete();
      setIsExiting(false);
    }, 500);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");

    handleClose();

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  };

  if (!isOpen && !isExiting) return null;

  return (
    <div
      className={`${styles.backdrop} ${isExiting ? styles.exit : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.mobileMenu} ${isExiting ? styles.exit : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className={styles.navMobile}>
          {navData.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
