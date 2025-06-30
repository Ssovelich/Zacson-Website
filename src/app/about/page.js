import styles from "@/./styles/pages/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.bg}>
        <h1 className={styles.title}>About me</h1>
      </div>
      <div>
        <img
          src="/images/about.jpg"
          alt="About Zacson"
          className={styles.aboutImage}
        />
        <p className={styles.aboutText}>
          You’ll look at graphs and charts in Task One, how to approach the task
          and the language needed for a successful answer. You’ll examine Task
          Two questions and learn how to plan, write and check academic essays.
        </p>
        <p className={styles.aboutText}>
          Task One, how to approach the task and the language needed for a
          successful answer. You’ll examine Task Two questions and learn how to
          plan, write and check academic essays.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
