import styles from "@/./styles/pages/PricingPage.module.css";
import { FaCheck } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import pricingData from "./pricingData.json";

export const metadata = {
  title: "Pricing | Zacson Fitness Club",
  description:
    "Choose the best fitness plan for your goals. View Zacson’s pricing options for personal and group training sessions.",
};

const PricingPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Pricing</h1>
      </div>
      <div className={`container ${styles.pricingContent}`}>
        <div className={styles.list}>
          {pricingData.map((plan) => (
            <article key={plan.id} className={styles.card}>
              <div className={styles.headerCard}>
                <CgGym className={styles.icon} />
                <h3 className={styles.titleCard}>
                  {plan.title}
                  <span className={styles.duration}>({plan.duration})</span>
                </h3>
              </div>
              <p className={styles.price}>
                <strong>{plan.price}</strong>
              </p>
              <p className={styles.billing}>{plan.billing}</p>
              <ul
                className={styles.features}
                aria-label={`${plan.title} features`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
