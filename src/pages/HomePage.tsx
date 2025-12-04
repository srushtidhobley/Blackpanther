// src/pages/HomePage.tsx

//import React from 'react';
import ServiceCard from '../components/ServiceCard';
import styles from './HomePage.module.css';

// --- Import Client Logos ---
import ndtvLogo from '../assets/icons/ndtv.png';
import souledStoreLogo from '../assets/icons/souled-store.png';
import minimalistLogo from '../assets/icons/minimalist.png';
import outAndOutLogo from '../assets/icons/outandout.png';
import arettoLogo from '../assets/icons/aretto.png';
import profileImg from '../assets/images/profile.jpg';
import behanceIcon from '../assets/icons/behance.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import instagramIcon from '../assets/icons/Instagram.svg';
import phoneImg from '../assets/images/phone.jpg';
import skullImg from '../assets/images/skull.jpg';
import barnHouseImg from '../assets/images/barn-house.jpg';

const clientLogos = [
  { name: 'NDTV', logo: ndtvLogo },
  { name: 'The Souled Store', logo: souledStoreLogo },
  { name: 'The Minimalist', logo: minimalistLogo },
  { name: 'Out and Out', logo: outAndOutLogo },
  { name: 'Aretto', logo: arettoLogo },
];

const HomePage = () => {
  return (
    <main className={styles.page}>
      {/* --- Profile Section --- */}
      <section className={styles.profileSection}>
        <img src={profileImg} alt="Profile" className={styles.profileImg} />
        <div className={styles.socialLinks}>
          <a
            href="https://www.behance.net/srushtidho48b4"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={behanceIcon} alt="Behance" className={styles.socialIconImg} />
          </a>
          <a
            href="https://www.linkedin.com/in/srushti-dhobley-43a842202/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIconImg} />
          </a>
          <a
            href="https://www.instagram.com/srushti_dhobley/?igsh=MWpvZ2twam95aGp2cQ%3D%3D&utm_source=qr#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={instagramIcon} alt="Instagram" className={styles.socialIconImg} />
          </a>
        </div>
      </section>

      {/* --- Hero Section --- */}
      <section className={styles.heroSection}>
        <h2 className={styles.heroTitle}>
          I don't just design beautiful things— I discover, deconstruct and craft experiences that matter.
        </h2>
        <p className={styles.heroSubtitle}>
          As a multidisciplinary designer, I thrive on the challenge of transforming ideas into compelling visual narratives. Inspired by the world around me and driven by a passion for experimentation. I approach each project with a design thinking mindset, committed to finding innovative and meaningful solutions.
        </p>
      </section>

      {/* --- Clients Section --- */}
      <section className={styles.clientsSection}>
        <div className={styles.scroller}>
          <div className={styles.scrollerInner}>
            {clientLogos.map((client) => (
              <img key={client.name} src={client.logo} alt={`${client.name} logo`} />
            ))}
            {clientLogos.map((client) => (
              <img key={`${client.name}-clone`} src={client.logo} alt={`${client.name} logo`} />
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section className={styles.servicesSection}>
        <ServiceCard
          number="01"
          title="WEB DESIGN"
          description="Visually stunning web designs that captivate audiences by blending brand voice, business growth, and customer needs."
          link="/projects/web-design"
          imageUrl={phoneImg}
        />
        <ServiceCard
          number="02"
          title="BRANDING"
          description="A curated showcase of visual identity projects, demonstrating strategic design thinking and consistent brand storytelling across diverse mediums."
          link="/projects/branding"
          imageUrl={skullImg}
        />
        <ServiceCard
          number="03"
          title="EXPERIMENTAL DESIGN"
          description="Exploring novel concepts and techniques: a playground for risk-taking, pushing creative boundaries, and future-forward design investigations."
          link="/projects/experiment"
          imageUrl={barnHouseImg}
        />
      </section>
    </main>
  );
};

export default HomePage;
