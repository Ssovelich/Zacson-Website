import styles from "./LoaderWave.module.css";

const LoaderWave = () => {
  return (
    <div className={styles.loader}>
      {["Z", "A", "C", "S", "O", "N"].map((char, index) => (
        <span className={styles.letterWrapper} key={index}>
          <span className={styles.shadow}>{char}</span>
          <span
            className={styles.letter}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default LoaderWave;
