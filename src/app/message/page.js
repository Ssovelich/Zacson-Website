import MessageForm from "@/components/MessageForm/MessageForm";
import styles from "@/styles/pages/MessagePage.module.css";

export const metadata = {
  title: "Message Me | Zacson Fitness Club",
  description:
    "Have a question or need personal guidance? Send us a message and our team will get back to you with tailored advice and next‑step recommendations.",
};

const MessagePage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Message me</h1>
      </div>
      <div className={`container ${styles.messageContent}`}>
        <MessageForm />
      </div>
    </>
  );
};

export default MessagePage;
