"use client";

import styles from "./not-found.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>404 – Page Not Found</h1>
      </div>
      <div className={`container ${styles.notFoundContent}`}>
        <p className={styles.text}>
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>
    </>
  );
};

export default NotFound;
