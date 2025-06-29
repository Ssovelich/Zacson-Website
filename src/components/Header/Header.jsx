"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect, useState } from "react";
import AnimatedLinkFill from "../AnimatedLinkFill/AnimatedLinkFill";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const updateScrolled = () => {
      const screenWidth = window.innerWidth;
      const threshold = screenWidth < 768 ? 90 : 150;
      setIsScrolled(window.scrollY > threshold);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled);
    window.addEventListener("resize", updateScrolled);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("resize", updateScrolled);
    };
  }, []);

  return (
   <header className={`${styles.header} ${isScrolled ? styles["header--scrolled"] : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="logo" width={95} height={45} />
        </Link>
        <nav className={styles.navDesktop}>
          {[
            ["Home", "/"],
            ["About", "/about"],
            ["Courses", "/courses"],
            ["Pricing", "/pricing"],
            ["Gallery", "/gallery"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </nav>
        <AnimatedLinkFill className={styles.contactLink} href="/contact">Contact me</AnimatedLinkFill>
        {/* <AnimatedLinkFill className={styles.contactLink} variant="fill" href="/hire">
          Hire me
        </AnimatedLinkFill> */}

        <button
          className={`${styles.burger} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <MobileMenu
          isOpen={mobileMenuOpen}
          onCloseComplete={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
