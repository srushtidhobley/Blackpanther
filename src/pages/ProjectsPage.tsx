// src/pages/ProjectsPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import styles from './ProjectsPage.module.css';

// --- Import Project Images ---
import barnHouseImg from '../assets/images/barn-house.jpg';
import vortexImg from '../assets/images/vortex.jpg';
import hajmolaImg from '../assets/images/hajmola.jpg';

// --- Project Data ---
const projectData = [
  {
    number: '01',
    title: 'THE BARN HOUSE',
    description: 'A digital platform designed to provide constant support for urban women aged 25-45 who seek constant assistance in practicing mindful eating.',
    imageUrl: barnHouseImg,
    link: 'https://www.behance.net/srushtidho48b4',
    category: 'Branding',
  },
  {
    number: '02',
    title: 'VORTEX',
    description: 'Offers personalized meal plans, practical tips, and educational resources to help integrate healthier eating habits into fast-paced lifestyles.',
    imageUrl: vortexImg,
    link: 'https://www.behance.net/srushtidho48b4',
    category: 'Branding',
  },
  {
    number: '03',
    title: 'ETHICAL PACKAGING',
    description: 'A conceptual project exploring sustainability and creative product presentation through ethical design principles.',
    imageUrl: hajmolaImg,
    link: 'https://www.behance.net/gallery/156580143/Redesign-Packaging',
    category: 'Branding',
  },
];

const ProjectsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeFilter, setActiveFilter] = useState('Branding');

  // --- Sync category from URL ---
  useEffect(() => {
    if (category) {
      const formattedCategory = category
        .replace('-', ' ') // e.g., web-design → web design
        .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize
      setActiveFilter(formattedCategory);
    }
  }, [category]);

  const filteredProjects = projectData.filter(
    (project) => project.category === activeFilter
  );

  return (
    <main className={styles.page}>
      {/* --- Filter Tabs --- */}
      <nav className={styles.filterNav}>
        <button
          className={activeFilter === 'Web Design' ? styles.active : ''}
          onClick={() => setActiveFilter('Web Design')}
        >
          Web Design
        </button>
        <button
          className={activeFilter === 'Branding' ? styles.active : ''}
          onClick={() => setActiveFilter('Branding')}
        >
          Branding
        </button>
        <button
          className={activeFilter === 'Experiment' ? styles.active : ''}
          onClick={() => setActiveFilter('Experiment')}
        >
          Experimental Design
        </button>
      </nav>

      {/* --- Projects List --- */}
      <section className={styles.projectsList}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))
        ) : (
          <p className={styles.noProjectsMessage}>
            There are no projects in this category yet. Stay tuned!
          </p>
        )}
      </section>
    </main>
  );
};

export default ProjectsPage;
