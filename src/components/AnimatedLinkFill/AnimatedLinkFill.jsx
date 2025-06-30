"use client";

import Link from "next/link";
import styles from "./AnimatedLinkFill.module.css";

const AnimatedLinkFill = ({
  href = "/contact",
  children = "Contact me",
  variant = "darken",
  className = "",
}) => {
  const combinedClassName = [
    styles.link,
    variant === "fill" && styles["link--outline"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={combinedClassName}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
}

export default AnimatedLinkFill;