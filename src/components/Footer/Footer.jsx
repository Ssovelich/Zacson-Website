"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerTop}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="logo" width={146} height={68} />
          </Link>
          <nav className={styles.nav}>
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
          <ul className={styles.socials}>
            <li className={styles.socialsItem}>
              <Link
                className={styles.socialsItemLink}
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={14} />
              </Link>
            </li>
            <li className={styles.socialsItem}>
              <Link
                className={styles.socialsItemLink}
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={14} />
              </Link>
            </li>
            <li className={styles.socialsItem}>
              <Link
                className={styles.socialsItemLink}
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP size={14} />
              </Link>
            </li>
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
