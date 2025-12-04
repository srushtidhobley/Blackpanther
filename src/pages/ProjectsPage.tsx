// src/pages/ProjectsPage.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

// --- Import Project Images ---
import barnHouseImg from '../assets/images/barn-house.jpg';
import vortexImg from '../assets/images/vortex.jpg';
import hajmolaImg from '../assets/images/hajmola.jpg';

// --- Import Blog Images ---
import imgA from '../assets/images/A.jpeg';
import imgB from '../assets/images/B.jpeg';
import imgC from '../assets/images/C.jpeg';
import imgD from '../assets/images/D.jpeg';

const projectData = [
  {
    number: '01',
    title: 'THE BARN HOUSE',
    description:
      'A digital platform designed to provide constant support for urban women aged 25-45 who seek constant assistance in practicing mindful eating.',
    imageUrl: barnHouseImg,
    link: 'https://www.behance.net/srushtidho48b4',
    category: 'Branding',
  },
  {
    number: '02',
    title: 'VORTEX',
    description:
      'Offers personalized meal plans, practical tips, and educational resources to help integrate healthier eating habits into fast-paced lifestyles.',
    imageUrl: vortexImg,
    link: 'https://www.behance.net/srushtidho48b4',
    category: 'Branding',
  },
  {
    number: '03',
    title: 'VIDEO SHOTS',
    description: 'A short film',
    videoUrl: 'https://www.youtube.com/embed/ig9jZU4F1Nw',
    category: 'Experiment',
  },
];

const ProjectsPage = () => {
  const { category } = useParams<{ category?: string }>();
  const [activeFilter, setActiveFilter] = useState('Branding');

  useEffect(() => {
    if (category) {
      const formattedCategory = category
        .replace('-', ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
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
          Video Shots
        </button>
      </nav>

      {/* --- Projects List --- */}
      <section className={styles.projectsList}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) =>
            project.videoUrl ? (
              <div key={project.number}>
                <h2>{project.title}</h2>

                {/* Video */}
                <div style={{ margin: '20px 0', textAlign: 'center' }}>
                  <iframe
                    width="100%"
                    height="400"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Description */}
                <p
                  style={{
                    whiteSpace: 'pre-line',
                    lineHeight: 1.6,
                    fontSize: '16px',
                    marginBottom: '30px',
                  }}
                >
                  {project.description}
                </p>

                {/* ----- FULL BLOG CONTENT WITH SPACING ----- */}
                <h3 style={{ marginTop: '40px' }}>Blog On Video Production</h3>

                <div
                  style={{
                    whiteSpace: 'pre-line',
                    lineHeight: '1.6',
                    fontSize: '16px',
                    marginTop: '20px',
                    marginBottom: '40px',
                  }}
                >
                  <h2>Concept Development & Storyline</h2>

                  <p style={{ marginBottom: '20px' }}>
                    Our team created a visually engaging, 1minute 24 second advertisement for Stik-ie Tape,
                    prioritizing a blend of imaginative storytelling and practical video production techniques.
                    The central concept revolves around the playful idea of a black hole drawn on a simple sheet
                    of paper, held in place by ordinary tape. The story follows a curious actor who discovers
                    that this paper is a magical portal: anything placed upon the black hole instantly drops
                    through to an unseen destination.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    She experiments with increasing boldness, using the taped paper as a fun, convenient
                    teleportation device by snatching a 7UP bottle through the fridge door and later sticking the
                    paper onto a TV screen to instantly transport herself to the distant scene displayed.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    This adventure takes a crucial turn when the protagonist attempts to fully step into the
                    television scene. In the climactic moment, weak tape fails to secure the paper portal,
                    causing the paper to fall and leaving the girl stuck inside the TV screen. This mishap
                    provides the perfect setup for the final reveal. The advertisement concludes by clarifying
                    the message that “cheap, unreliable tape simply isn't strong enough to hold a universe."
                  </p>

                  <h2>Final Output</h2>

                  <p style={{ marginBottom: '20px' }}>
                    After completing the shoot and editing process, our final step was exporting the video,
                    making sure it stayed under the mandatory 25MB file size, and then submitting it by uploading
                    the advertisement to YouTube. This project proved to be an invaluable experience that
                    significantly boosted our knowledge of practical filmmaking and strengthened our ability to
                    collaborate effectively as a team.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    Working through every stage — from storyboarding in sequence and precisely coordinating
                    complex scenes to seamlessly blending live action with visual effects — taught us how to
                    transform a simple, imaginative concept into compelling visual storytelling.
                  </p>

                  <p style={{ marginBottom: '20px' }}>
                    Specifically, the role of the editor offered profound lessons on the importance of
                    maintaining a solid pace in the story, ensuring visual consistency across shots, and making
                    the VFX portal feel completely real. Ultimately, this assignment was a rewarding opportunity
                    to blend imagination with technical production skills to deliver a fun and memorable ad for
                    Stik-ie Tape.
                  </p>

                  <h2>Team Roles & Responsibilities</h2>

                  <p style={{ marginBottom: '20px' }}>Srushti – Actor and Prop Manager</p>
                  <p style={{ marginBottom: '20px' }}>Manthan – Director, Cinematographer, Film Editor</p>
                  <p style={{ marginBottom: '20px' }}>Pranit – SFX and Visual Effect Editor</p>

                  <p style={{ marginBottom: '20px' }}>
                    All three of us jointly participated in creating props, storyboarding, exploring camera
                    angles, lighting setups, and picking the appropriate location.
                  </p>

                  {/* ----- IMAGES A–D ----- */}
                  <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <img
                      src={imgA}
                      alt="A"
                      style={{ width: '80%', borderRadius: '10px', marginBottom: '20px' }}
                    />
                    <img
                      src={imgB}
                      alt="B"
                      style={{ width: '80%', borderRadius: '10px', marginBottom: '20px' }}
                    />
                    <img
                      src={imgC}
                      alt="C"
                      style={{ width: '80%', borderRadius: '10px', marginBottom: '20px' }}
                    />
                    <img
                      src={imgD}
                      alt="D"
                      style={{ width: '80%', borderRadius: '10px', marginBottom: '20px' }}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={project.number}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '10px',
                  padding: '20px',
                  marginBottom: '30px',
                }}
              >
                <h2>{project.title}</h2>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  style={{ width: '100%', borderRadius: '10px', margin: '15px 0' }}
                />
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '10px',
                      color: '#0077cc',
                    }}
                  >
                    View Project
                  </a>
                )}
              </div>
            )
          )
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
