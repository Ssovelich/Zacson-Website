"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import styles from "./AnimatedLinkFill.module.css";

/**
 * @param {string} href   - адреса посилання
 * @param {string|ReactNode} children - текст або елемент
 * @param {"darken"|"fill"} variant   - тип ефекту
 */
export default function AnimatedLinkFill({
  href = "/contact",
  children = "Contact me",
  variant = "darken",
}) {
  const linkRef = useRef(null);

  useEffect(() => {
    const el = linkRef.current;

    const handleEnter = () => {
      el.classList.remove(
        styles.leave,
        styles["leave-vertical"],
        styles.enter,
        styles["enter-vertical"]
      );
      el.classList.add(
        variant === "fill" ? styles["enter-vertical"] : styles.enter
      );
    };

    const handleLeave = () => {
      el.classList.remove(
        styles.enter,
        styles["enter-vertical"],
        styles.leave,
        styles["leave-vertical"]
      );
      el.classList.add(
        variant === "fill" ? styles["leave-vertical"] : styles.leave
      );
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [variant]);

  /* формуємо класи */
  const className = [
    styles.link,
    variant === "fill" && styles["link--outline"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={className} ref={linkRef}>
      <span className={styles.label}>{children}</span>
    </Link>
  );
}
