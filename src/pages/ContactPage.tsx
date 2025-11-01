// src/pages/ContactPage.tsx

//import React from 'react';
import Button from '../components/Button';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Form submitted! (This is a placeholder)');
  };

  return (
    <main className={styles.page}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Let's get in touch.</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">NAME</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">MESSAGE</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <Button type="submit" variant="primary" fullWidth={true}>
            SEND MESSAGE
          </Button>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <Button
          variant="social"
          href="https://www.instagram.com/srushti_dhobley/?igsh=MWpvZ2twam95aGp2cQ%3D%3D&utm_source=qr#"
          fullWidth={true}
        >
          <span>INSTAGRAM</span>
          <span>↗</span>
        </Button>
        <Button
          variant="social"
          href="https://www.behance.net/srushtidho48b4"
          fullWidth={true}
        >
          <span>BEHANCE</span>
          <span>↗</span>
        </Button>
        <Button
          variant="social"
          href="https://www.linkedin.com/in/srushti-dhobley-43a842202/"
          fullWidth={true}
        >
          <span>LINKEDIN</span>
          <span>↗</span>
        </Button>
      </div>
    </main>
  );
};

export default ContactPage;