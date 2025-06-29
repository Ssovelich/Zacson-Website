import styles from "./LoaderCoin.module.css";

const LoaderCoin = () => {
  return (
    <div className={styles.loader}>
      <img src="/loader.png" alt="Logo" className={styles.logo} />
    </div>
  );
};

export default LoaderCoin;
