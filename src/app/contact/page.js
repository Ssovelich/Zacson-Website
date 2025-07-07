import styles from "@/styles/pages/ContactPage.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export const metadata = {
  title: "Contact | Zacson Fitness Club",
  description:
    "Get in touch with Zacson Fitness Club. Find our location, contact details, and reach out to book a session or ask a question.",
};

const ContactPage = () => {
  return (
    <>
      <div className={styles.bg}>
        <h1 className={`container ${styles.title}`}>Contact</h1>
      </div>
      <div className={`container ${styles.contactContent}`}>
        <address className={`container ${styles.contactList}`}>
          <a
            href="https://www.google.com/maps/place/Rosemead,+CA+91770"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
            aria-label="Open location in Google Maps"
          >
            <div className={styles.iconWrap}>
              <FaLocationDot size={28} aria-hidden="true" />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Location</h3>
              <p className={styles.text}>
                Buttonwood, California,
                <br />
                <span>Rosemead, CA 91770</span>
              </p>
            </div>
          </a>

          <div className={styles.contactItem}>
            <div className={styles.iconWrap}>
              <FaPhoneAlt size={24} />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Phone</h3>
              <p className={styles.text}>
                <a
                  href="tel:+9092778082566"
                  className={styles.link}
                  aria-label="Call (90) 277 808 2566"
                >
                  (90) 277 808 2566
                </a>
              </p>
              <p className={styles.text}>
                <a
                  href="tel:+7872672022578"
                  className={styles.link}
                  aria-label="Call (78) 267 202 2578"
                >
                  (78) 267 202 2578
                </a>
              </p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconWrap}>
              <MdOutlineEmail size={30} />
            </div>
            <div className={styles.contactDetails}>
              <h3 className={styles.titleItem}>Email</h3>
              <p className={styles.text}>
                <a
                  href="mailto:zacson@gmail.com"
                  className={styles.link}
                  aria-label="Send email to zacson@gmail.com"
                >
                  zacson@gmail.com
                </a>
              </p>
              <p className={styles.text}>
                <a
                  href="mailto:contact@zacson.com"
                  className={styles.link}
                  aria-label="Send email to contact@zacson.com"
                >
                  contact@zacson.com
                </a>
              </p>
            </div>
          </div>
        </address>
      </div>
    </>
  );
};

export default ContactPage;
