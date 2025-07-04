import styles from "./StatusModal.module.css";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

const StatusModal = ({ status }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (status) {
      setVisible(true);
      timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [status]);

  if (!status && !visible) return null;

  return (
    <div
      className={`${styles.backdrop} ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      <div
        className={`${styles.modal} ${
          status?.type === "success" ? styles.success : styles.error
        }`}
      >
        {status?.type === "success" ? (
          <FaCheckCircle className={styles.icon} />
        ) : (
          <FaExclamationCircle className={styles.icon} />
        )}
        <p className={styles.message}>{status?.message}</p>
      </div>
    </div>
  );
};

export default StatusModal;
