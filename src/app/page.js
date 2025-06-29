import Loader from "@/components/Loader/Loader";
import LoaderCoin from "@/components/LoaderCoin/LoaderCoin";
import LoaderWave from "@/components/LoaderWave/LoaderWave";
import styles from "@/styles/pages/Home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Hi, This is Zacson Gym Trainer</h1>
          <Link href="/courses" className={styles.heroButton}>My Courses</Link>
        </div>
      </section>

      <Loader/>
      <LoaderWave/>
      <LoaderCoin/>

      {/* Training Categories */}
      <section className={styles.trainingCategories}>
        <h2>Training Categories</h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <h3>Personal Training</h3>
            <p>One-on-one sessions tailored to your goals.</p>
            <Link href="/courses">View Courses</Link>
          </div>
          <div className={styles.card}>
            <h3>Group Training</h3>
            <p>Train with others in a motivating environment.</p>
            <Link href="/courses">View Courses</Link>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className={styles.offers}>
        <h2>What I Offer</h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <h3>Body Building</h3>
            <p>Professional support to build your dream physique.</p>
          </div>
          <div className={styles.card}>
            <h3>Muscle Gain</h3>
            <p>Structured plans to increase your strength and size.</p>
          </div>
          <div className={styles.card}>
            <h3>Weight Loss</h3>
            <p>Effective workouts to help you shred fat and stay fit.</p>
          </div>
        </div>
      </section>

      {/* Video Banner */}
      <section className={styles.videoBanner}>
        <div className={styles.videoContent}>
          <h2>Watch Our Training in Action</h2>
          <button className={styles.playButton}>▶ Play Video</button>
        </div>
      </section>
    </div>
  );
}
