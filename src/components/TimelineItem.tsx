// src/components/TimelineItem.tsx

//import React from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  alignment: 'left' | 'right';
}

const TimelineItem = ({ title, subtitle, date, alignment }: TimelineItemProps) => {
  // Combine the base container class with the specific alignment class
  const containerClasses = `${styles.container} ${styles[alignment]}`;

  return (
    <div className={containerClasses}>
      <div className={styles.dot}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default TimelineItem;