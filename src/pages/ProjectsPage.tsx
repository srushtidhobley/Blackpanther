// src/pages/ProjectsPage.tsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProjectsPage.module.css';

// --- Import Project Images ---
import barnHouseImg from '../assets/images/barn-house.jpg';
import vortexImg from '../assets/images/vortex.jpg';
//import hajmolaImg from '../assets/images/hajmola.jpg';

// --- Import Blog Images ---
import imgA from '../assets/images/A.jpeg';
import imgB from '../assets/images/B.jpeg';
import imgC from '../assets/images/C.jpeg';
import imgD from '../assets/images/D.jpeg';
import echoGardenPdf from '../assets/Interactive-art-storyboarding.pdf';
import imgE from '../assets/images/abb.jpg';

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
  {
    number: '05',
    title: 'INTERACTIVE SCULPTURE',
    description: 'Detachable Kaleidoscope — a modular interactive sculpture exploring how the structure of information shapes the truths we perceive.',
    videoUrl: 'https://www.youtube.com/embed/QLhWnRbSY3s',
    category: 'Experiment',
    reflectionBlog: `The Detachable Kaleidoscope is a modular interactive sculpture that explores the idea of different truths arising from the same information, depending on its structure. The sculpture consists of four octagon blocks and a kaleidoscope viewing piece stacked on top of each other. Each block features a fragment of dialogue from a fictional police interview scenario. By rearranging the blocks, audiences change the order of the dialogue — and with it, the truth they perceive from the same story.

The idea grew out of discussions about the fragmented nature of information in modern media. Platforms like TikTok, Instagram Reels and X present short-form content that limits the full context of stories. Rather than focusing on misinformation, we focused on the structure of information itself — arguing that truth is not always in the content, but in how that content is arranged.

Concept & Theme

The main theme is the distortion of truth within narratives and the power of interpretation. The kaleidoscope component continuously displays the same images yet in a different structure depending on movement, mirroring how digital platforms fragment and reframe the same story for different audiences. Interactivity here replaces the passive spectator with an active participant — the audience literally becomes the one who shapes the narrative.

Technical Process

The sculpture functions through analogue electronics, Arduino sensing, and audio sequencing within Pure Data. Each octagonal block contains copper contact points and resistors. When the blocks are stacked, the resulting resistor network changes depending on their arrangement, producing different analogue voltage readings that the Arduino sends to Pure Data. Different resistance ranges trigger different arrangements of the narrative audio. Stability in readings was achieved by adding averaging logic to the Arduino, resolving early inconsistencies from the contact points.

Fabrication & Iteration

The modules were fabricated from 3 mm MDF using laser-cut pieces and finger joint construction. Several iterations were needed before the joints were reliable. Copper tape contact pads were added to the exterior faces, with internal resistors soldered to the conductive areas. The kaleidoscope module was built separately from mirrored acrylic arranged in a triangular prism — a component that developed partly through testing rather than prior planning.

Reflection

One of the key relationships that emerged during this project was that between physical interaction and conceptual meaning. By manipulating the sculpture, the story changes — yet without any additional explanation, leaving the audience to construct their own interpretation. The focus on sequencing rather than changing the content was conceptually effective: it showed how the same information can carry entirely different weight depending on its order.

The project also taught us the value of simplicity. More complicated audio systems were considered early on, but simplifying the interaction made the experience clearer and more impactful. Working through the challenges of analogue inconsistencies — far from being failures — actually became part of the installation character, visible and incorporated into the interaction itself.

Overall, the Detachable Kaleidoscope succeeded in creating an interactive art piece that encouraged audiences to reflect on how truth is not fixed, but shaped by structure, arrangement, and the act of interaction itself.

Group Members: Manthan Thool · Pranit Mahamuni · Srushti Dhobley · Anthony Carey
Module: CS6042 — Interactive Media Project/Workshop 2 | Semester 2025/26`,
  },
  {
  number: '04',
  title: 'ECHO GARDEN: POLLINATION PLAYGROUND',
  description:
    'An interactive art storyboard exploring how visitors influence a digital ecosystem through pollination-inspired interactions. The project highlights UN Sustainable Development Goal 15 (Life on Land) using immersive storytelling, system flow, and conceptual technology.',
  imageUrl: imgE,
  link: echoGardenPdf,
  category: 'Branding',
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

                {/* ----- BLOG CONTENT ----- */}
                {project.reflectionBlog ? (
                  <>
                    <h3 style={{ marginTop: '40px' }}>Reflection Blog — Interactive Sculpture</h3>
                    <div
                      style={{
                        whiteSpace: 'pre-line',
                        lineHeight: '1.8',
                        fontSize: '16px',
                        marginTop: '20px',
                        marginBottom: '40px',
                        maxWidth: '800px',
                        margin: '20px auto 40px',
                      }}
                    >
                      {project.reflectionBlog}
                    </div>
                  </>
                ) : (
                <>
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
                </>
                )}
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
