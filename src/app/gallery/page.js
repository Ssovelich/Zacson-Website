import styles from "@/styles/pages/GalleryPage.module.css";

const GalleryPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Gallery</h1>
      </div>
      <div className={`container ${styles.galleryContent}`}>
        <ul className={styles.galleryList}>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery1.png"
              alt="image gallery 1"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery2.png"
              alt="image gallery 2"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery3.png"
              alt="image gallery 3"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery4.png"
              alt="image gallery 4"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery5.png"
              alt="image gallery 5"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery6.png"
              alt="image gallery 6"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery7.png"
              alt="image gallery 7"
              className={styles.image}
            />
          </li>
          <li className={styles.galleryItem}>
            <img
              src="/images/gallery8.png"
              alt="image gallery 8"
              className={styles.image}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default GalleryPage;
