import AnimatedLinkFill from "@/components/AnimatedLinkFill/AnimatedLinkFill";
import styles from "@/styles/pages/Home.module.css";
// import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>
            Hi this is Zacson
            <br /> <span className={styles.titleSpan}>Gym Trainer</span>{" "}
          </h1>

          <AnimatedLinkFill
            className={styles.coursesLink}
            variant="fill"
            href="/courses"
          >
            My Courses
          </AnimatedLinkFill>
        </div>
      </section>

      {/* Training Categories */}
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

      {/* What I Offer */}
      <section className={`container ${styles.offers}`}>
        <h2 className={styles.offersTitle}>What I Offer</h2>
        <ul className={styles.offersCardsWrapper}>
          <li className={styles.offersCard}>
            <img
              className={styles.offersCardImage}
              src="/images/team1.png"
              alt="Body Building Photo"
            />

            <h3 className={styles.offersCardTitle}>Body Building</h3>
            <p className={styles.offersText}>
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </li>
          <li className={styles.offersCard}>
            <img
              className={styles.offersCardImage}
              src="/images/team2.png"
              alt="Muscle Gain Photo"
            />
            <h3 className={styles.offersCardTitle}>Muscle Gain</h3>
            <p className={styles.offersText}>
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </li>
          <li className={styles.offersCard}>
            <img
              className={styles.offersCardImage}
              src="/images/team3.png"
              alt="Weight Loss Photo"
            />
            <h3 className={styles.offersCardTitle}>Weight Loss</h3>
            <p className={styles.offersText}>
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </li>
        </ul>
      </section>

      {/* Video Banner */}
      <section className={styles.videoBanner}>
        <div className={`container ${styles.videoContent}`}>
          <h2 className={styles.videoTitle}>Watch Our Training in Action</h2>
          <button className={styles.playButton}><FaPlay /></button>
        </div>
      </section>
    </div>
  );
}
