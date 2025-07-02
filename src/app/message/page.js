import styles from "@/styles/pages/MessagePage.module.css";

const MessagePage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Message me</h1>
      </div>

      <div className={`container ${styles.aboutContent}`}>


      </div>
    </>
  );
};

export default MessagePage;
