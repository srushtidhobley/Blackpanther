// src/components/ServiceCard.tsx

//import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

const ServiceCard = ({ number, title, description, link, imageUrl }: ServiceCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.textSection}>
          <div className={styles.header}>
            <span className={styles.number}>{number}</span>
            <h3 className={styles.title}>{title}</h3>
          </div>
          <p className={styles.description}>{description}</p>
          <Link to={link} className={styles.viewLink}>
            <span>VIEW</span>
            <svg className={styles.arrow} width="24" height="24" viewBox="0 0 24 24">
              <path d="M16.5 12L8 5V19L16.5 12Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;