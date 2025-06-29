import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.logoWrapper}>
        <img src="/loader.png" alt="Logo" className={styles.logo} />
        <span className={styles.track}></span>
        <span className={styles.snake}></span>
      </div>
    </div>
  );
};

export default Loader;
