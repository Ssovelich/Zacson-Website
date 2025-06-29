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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header className={`${styles.header} ${isScrolled ? styles["header--scrolled"] : ""}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="logo" width={95} height={45} />
        </Link>
        <nav className={styles.navDesktop}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/courses" className={styles.navLink}>
            Courses
          </Link>
          <Link href="/pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            Gallery
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
        <AnimatedLinkFill className={styles.contactLink} href="/contact">Contact me</AnimatedLinkFill>
        {/* <AnimatedLinkFill className={styles.contactLink} variant="fill" href="/hire">
          Hire me
        </AnimatedLinkFill> */}

        <button
          className={`${styles.burger} ${mobileMenuOpen ? styles.open : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {mobileMenuOpen && (
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Header;
