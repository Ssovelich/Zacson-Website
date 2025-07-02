"use client";

import styles from "./MessageForm.module.css"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoaderWave from "@/components/LoaderWave/LoaderWave";

const MessageForm = () => {
    const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus({
        type: "success",
        message: "Your message has been sent successfully! 💪",
      });
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name*"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone Number*"
          pattern="[+ 0-9]{7,}"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address*"
          required
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Comment"
          rows={5}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <button type="submit" disabled={submitting} className={styles.button}>
        {submitting ? <LoaderWave /> : "Send Message"}
      </button>

      {status.message && (
        <p
          className={`${styles.status} ${
            status.type === "success" ? styles.success : styles.error
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
};

export default MessageForm;
