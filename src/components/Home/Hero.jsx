import AnimatedLinkFill from "../AnimatedLinkFill/AnimatedLinkFill"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
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
  )
}

export default Hero