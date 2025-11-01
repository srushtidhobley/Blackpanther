// src/components/ProjectCard.tsx

//import React from 'react';
import Button from './Button';
import styles from './ProjectCard.module.css';

// Define the properties the card will accept
interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  imageUrl: string; // URL for the project's main image
  link: string; // Link to the project case study
}

const ProjectCard = ({ number, title, description, imageUrl, link }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <span className={styles.number}>{number}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.viewButton}>
          
          <Button variant="secondary" href={link}>
            VIEW →
          </Button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={`${title} project mockup`} className={styles.image} />
      </div>
    </div>
  );
};

export default ProjectCard;