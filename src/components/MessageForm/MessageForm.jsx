"use client";

import styles from "./MessageForm.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import LoaderWave from "@/components/LoaderWave/LoaderWave";
import toast from "react-hot-toast";
import { messageSchema } from "@/validation/messageSchema";

const MessageForm = () => {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    // створюємо копію values з оновленим полем
    const updatedValues = { ...values, [name]: value };

    const result = messageSchema.safeParse(updatedValues);

    if (result.success) {
      // якщо весь обʼєкт валідний, очищуємо всі помилки
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } else {
      // шукаємо конкретну помилку по полю
      const fieldError = result.error.errors.find((e) => e.path[0] === name);
      if (fieldError) {
        setErrors((prev) => ({ ...prev, [name]: fieldError.message }));
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
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
      return;
    }

    setSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("Ваше повідомлення надіслано успішно! 💪");

      formRef.current.reset();
      setValues({ name: "", phone: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className={styles.form}>
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
          Ваше імʼя*
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
          Номер телефону*
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
          Email адреса*
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
          Коментар
        </label>
        {errors.message && <p className={styles.errorMsg}>{errors.message}</p>}
      </div>

      <button type="submit" disabled={submitting} className={styles.button}>
        {submitting ? <LoaderWave /> : "Надіслати повідомлення"}
      </button>
    </form>
  );
};

export default MessageForm;
