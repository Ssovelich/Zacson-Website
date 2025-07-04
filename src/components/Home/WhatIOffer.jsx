import styles from "./WhatIOffer.module.css"

const WhatIOffer = () => {
  return (
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
              Build strength, size, and definition with our intensive bodybuilding program.
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
              Gain lean muscle mass with structured strength and hypertrophy training.
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
              Burn fat and boost your energy with our dynamic weight loss sessions.
            </p>
          </li>
        </ul>
      </section>
  )
}

export default WhatIOffer