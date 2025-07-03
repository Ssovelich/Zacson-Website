"use client";

import styles from "./MessageForm.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoaderWave from "@/components/LoaderWave/LoaderWave";
import toast, { Toaster } from "react-hot-toast";

const MessageForm = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [filled, setFilled] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    setFilled((prev) => ({
      ...prev,
      [e.target.name]: !!e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Your message has been sent successfully! 💪");

      formRef.current.reset();
      setFilled({ name: false, phone: false, email: false, message: false });
    } catch (err) {
      console.error(err);
      toast.error("Oops! Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={`${styles.input} ${filled.name ? styles.filled : ""}`}
            onChange={handleChange}
          />
          <label htmlFor="name" className={styles.label}>
            Your Name*
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            id="phone"
            name="phone"
            type="tel"
            pattern="[+ 0-9]{7,}"
            required
            className={`${styles.input} ${filled.phone ? styles.filled : ""}`}
            onChange={handleChange}
          />
          <label htmlFor="phone" className={styles.label}>
            Phone Number*
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`${styles.input} ${filled.email ? styles.filled : ""}`}
            onChange={handleChange}
          />
          <label htmlFor="email" className={styles.label}>
            Email Address*
          </label>
        </div>

        <div className={styles.inputGroup}>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${styles.input} ${styles.textarea} ${
              filled.message ? styles.filled : ""
            }`}
            onChange={handleChange}
          />
          <label htmlFor="message" className={styles.label}>
            Your Comment
          </label>
        </div>

        <button type="submit" disabled={submitting} className={styles.button}>
          {submitting ? <LoaderWave /> : "Send Message"}
        </button>
      </form>
    </>
  );
};

export default MessageForm;
