import styles from "./not-found.module.css";

const NotFound = () => {
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
