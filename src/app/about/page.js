import styles from "@/./styles/pages/AboutPage.module.css";

export const metadata = {
  title: "About Zacson | Professional Fitness Trainer",
  description: "Learn more about Zacson – certified personal trainer and fitness coach with years of experience in helping clients achieve their health goals.",
};

const AboutPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>About me</h1>
      </div>

      <div className={`container ${styles.aboutContent}`}>
        <img
          src="/images/about.png"
          alt="About Zacson"
          className={styles.aboutImage}
        />
        <div className={styles.aboutTextWrap}>
          <p className={styles.aboutText}>
            You’ll look at graphs and charts in Task One, how to approach the
            task and the language needed for a successful answer. You’ll examine
            Task Two questions and learn how to plan, write and check academic
            essays.
          </p>
          <p className={styles.aboutText}>
            Task One, how to approach the task and the language needed for a
            successful answer. You’ll examine Task Two questions and learn how
            to plan, write and check academic essays.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
