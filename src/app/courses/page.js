import styles from "@/./styles/pages/CoursesPage.module.css";
import coursesData from "./coursesData.json";

export const metadata = {
  title: "Courses | Zacson Fitness Club",
  description:
    "Discover Zacson’s range of expert‑led fitness courses—including Body Building, Muscle Gain, and Weight Loss—and choose the perfect program to reach your goals.",
};

const CoursesPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Courses</h1>
      </div>
      <div className={`container ${styles.coursesContent}`}>
        <div className={`container ${styles.list}`}>
          {coursesData.map((cours) => (
            <article key={cours.id} className={styles.item}>
              <h2 className={styles.itemTitle}>{cours.title}</h2>
              <img
                src={`/images/${cours.image}`}
                alt={cours.title}
                className={styles.img}
              />
              <p className={styles.itemText}>{cours.description}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
