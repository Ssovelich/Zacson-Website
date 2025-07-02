"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter, FaPinterestP, FaFacebookF } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const socialsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const navData = [
    ["Home", "/"],
    ["About", "/about"],
    ["Courses", "/courses"],
    ["Pricing", "/pricing"],
    ["Gallery", "/gallery"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
  ];

  const socialLinks = [
    { href: "https://twitter.com", icon: <FaTwitter size={14} /> },
    { href: "https://www.facebook.com", icon: <FaFacebookF size={14} /> },
    { href: "https://www.pinterest.com/", icon: <FaPinterestP size={14} /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const node = socialsRef.current;
    if (node) observer.observe(node);
    return () => node && observer.unobserve(node);
  }, []);

  return (
    <footer>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerTitle}>Zacson</h2>
          <nav className={styles.nav}>
            {navData.map(([label, href]) => (
              <Link key={href} href={href} className={styles.navLink}>
                {label}
              </Link>
            ))}
          </nav>
          <ul
            ref={socialsRef}
            className={`${styles.socials} ${
              isVisible ? styles.loopVisible : ""
            }`}
          >
            {socialLinks.map((link, index) => (
              <li
                key={link.href}
                className={styles.socialsItem}
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                <Link
                  className={styles.socialsItemLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>&copy; 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
