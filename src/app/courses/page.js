import styles from "@/./styles/pages/CoursesPage.module.css";
import coursesData from "./coursesData.json";

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
                commentMore
                actions
                src={`/images/${cours.image}`}
                alt={cours.title}
                className={styles.img}
                priority
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
