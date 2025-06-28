import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
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
        <Link href="/contact" className={styles.navLink}>
              Contact me
            </Link>
      </div>
    </header>
  );
};

export default Header;
