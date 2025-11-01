// src/pages/AboutPage.tsx

//import React from 'react';
import TimelineItem from '../components/TimelineItem';
import Button from '../components/Button';
import styles from './AboutPage.module.css';

import radarChart from '../assets/images/radar-chart.png';
import cvFile from '../assets/Srushti_CV.pdf';

const AboutPage = () => {
  return (
    <main className={styles.page}>
      {/* --- Skills Section --- */}
      <section className={styles.skillsSection}>
        <img src={radarChart} alt="Skills radar chart" className={styles.skillsChart} />
      </section>

      {/* --- Timeline Section --- */}
      <section className={styles.timelineSection}>
        <h2>Experience & Education</h2>
        <div className={styles.timelineContainer}>
          <TimelineItem
            alignment="left"
            date="AUG 2024 - NOV 2024"
            title="THE MINIMALIST, DESIGN AGENCY"
            subtitle="ROLE- VISUAL DESIGNER (FULL-TIME)"
          />
          <TimelineItem
            alignment="right"
            date="JULY 2020 - JULY 2024"
            title="MIT AVANTIKA UNIVERSITY, UJJAIN"
            subtitle="BACHELORS IN DESIGN (B.DES), VISUAL COMMUNICATION"
          />
          <TimelineItem
            alignment="left"
            date="JAN 2024 - MAY 2024"
            title="OUT AND OUT DESIGN STUDIO"
            subtitle="ROLE- VISUAL COMMUNICATION DESIGNER (INTERNSHIP)"
          />
           <TimelineItem
            alignment="right"
            date="APRIL 2023 - JUNE 2023"
            title="THE SOULED STORE"
            subtitle="ROLE- VISUAL COMMUNICATION DESIGNER (INTERNSHIP)"
          />
           <TimelineItem
            alignment="left"
            date="JULY 2020 - JULY 2024"
            title="MAKERSADDA, ALAGANGLE"
            subtitle="COMMUNITY ART CENTRE"
          />
        </div>
      </section>

      {/* --- CV Download Section --- */}
      <section className={styles.cvSection}>
        <Button href={cvFile} download={true}>
          Download CV
        </Button>
      </section>

      {/* --- Outro Section --- */}
      <section className={styles.outroSection}>
        <p>
          I'm always learning and evolving as a result of my constant exposure to the ever
          changing environment. I can contribute to the organization by maintaining a
          positive attitude towards my job and people around me.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;