import AnimatedLinkFill from "../AnimatedLinkFill/AnimatedLinkFill"
import styles from "./TrainingCategories.module.css"

const TrainingCategories = () => {
  return (
     <section className={`container ${styles.trainingCategories}`}>
        <h2 className={styles.categoriesTitle}>Training Categories</h2>
        <ul className={styles.cardsWrapper}>
          <li className={`${styles.card} ${styles.card1}`}>
            <h3 className={styles.cardTitle}>Personal Training</h3>
            <p className={styles.cardText}>
              You’ll look at graphs and charts in Task One, how to approach the
              task and the language needed for a successful answer.
            </p>
            <AnimatedLinkFill variant="fill" href="/courses">
              View Courses
            </AnimatedLinkFill>
          </li>
          <li className={`${styles.card} ${styles.card2}`}>
            <h3 className={styles.cardTitle}>Group Training</h3>
            <p className={styles.cardText}>
              You’ll look at graphs and charts in Task One, how to approach the
              task and the language needed for a successful answer.
            </p>
            <AnimatedLinkFill href="/contact">View Courses</AnimatedLinkFill>
          </li>
        </ul>
      </section>
  )
}

export default TrainingCategories