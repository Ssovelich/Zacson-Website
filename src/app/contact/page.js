import styles from "@/styles/pages/ContactPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Contact</h1>
      </div>
      <div className={`container ${styles.contactContent}`}>
        <ul className={`container ${styles.contactList}`}>
          <li className={styles.contactItem}>
            <div className={styles.iconWrap}>
              <FaLocationDot size={28} />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Location</h3>
              <p className={styles.text}>
                Buttonwood, California.
                <br /> <span>Rosemead, CA 91770</span>
              </p>
            </div>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.iconWrap}>
              <FaPhoneAlt size={24} />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Phone</h3>
              <p className={styles.text}>(90) 277 808 2566</p>
              <p className={styles.text}>(78) 267 202 2578</p>
            </div>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.iconWrap}>
              <MdOutlineEmail size={30} />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Email</h3>
              <p className={styles.text}>zacson@gmail.com</p>
              <p className={styles.text}>contact@zacson.com</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactPage;
