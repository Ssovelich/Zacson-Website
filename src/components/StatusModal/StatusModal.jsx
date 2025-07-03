import styles from "./StatusModal.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const StatusModal = ({ status }) => {
  return (
    <AnimatePresence>
      {status && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`${styles.modal} ${
              status.type === "success"
                ? styles.success
                : status.type === "error"
                ? styles.error
                : ""
            }`}
            initial={{ y: "-50%", opacity: 0, scale: 0.9 }}
            animate={{ y: "-50%", opacity: 1, scale: 1 }}
            exit={{ y: "-50%", opacity: 0, scale: 0.9 }}
          >
            <div className={styles.iconWrapper}>
              {status.type === "success" && (
                <FaCheckCircle className={styles.icon} />
              )}
              {status.type === "error" && (
                <FaExclamationCircle className={styles.icon} />
              )}
            </div>
            <p className={styles.message}>{status.message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
