"use client";

import styles from "./MessageForm.module.css";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import LoaderWave from "@/components/LoaderWave/LoaderWave";
import { messageSchema } from "@/validation/messageSchema";
import StatusModal from "../StatusModal/StatusModal";

const MessageForm = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const updatedValues = { ...values, [name]: value };
    const result = messageSchema.safeParse(updatedValues);

    if (result.success) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } else {
      const fieldError = result.error.errors.find((e) => e.path[0] === name);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldError ? fieldError.message : "",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = messageSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setFormStatus({
        type: "error",
        message: "Please check all form fields",
      });
      return;
    }

    setSubmitting(true);
    setFormStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      formRef.current.reset();
      setValues({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setFormStatus({
        type: "error",
        message: "An error occurred. Please try again",
      });
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => setFormStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className={styles.form}
    >
      <StatusModal status={formStatus} />

      {/* Name */}
      <div className={styles.inputGroup}>
        <input
          id="name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          className={`${styles.input} ${values.name ? styles.filled : ""} ${
            errors.name ? styles.errorInput : ""
          }`}
        />
        <label htmlFor="name" className={styles.label}>
          Your name*
        </label>
        {errors.name && <p className={styles.errorMsg}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div className={styles.inputGroup}>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange}
          className={`${styles.input} ${values.phone ? styles.filled : ""} ${
            errors.phone ? styles.errorInput : ""
          }`}
        />
        <label htmlFor="phone" className={styles.label}>
          Phone number*
        </label>
        {errors.phone && <p className={styles.errorMsg}>{errors.phone}</p>}
      </div>

      {/* Email */}
      <div className={styles.inputGroup}>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          className={`${styles.input} ${values.email ? styles.filled : ""} ${
            errors.email ? styles.errorInput : ""
          }`}
        />
        <label htmlFor="email" className={styles.label}>
          Email*
        </label>
        {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
      </div>

      {/* Message */}
      <div className={styles.inputGroup}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea} ${
            values.message ? styles.filled : ""
          } ${errors.message ? styles.errorInput : ""}`}
        />
        <label htmlFor="message" className={styles.label}>
          Message
        </label>
        {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}
      </div>

      <button type="submit" disabled={submitting} className={styles.button}>
        {submitting ? <LoaderWave /> : "Send message"}
      </button>
    </form>
  );
};

export default MessageForm;
