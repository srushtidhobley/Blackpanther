// src/components/Footer.tsx
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contactInfo}>
          <h3 className={styles.title}>Lets connect!</h3>
          <a href="mailto:srushtidhobley319@gmail.com" className={styles.emailLink}>
            srushtidhobley319@gmail.com
          </a>
        </div>

        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <h4 className={styles.title}>Explore</h4>
            <ul>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/lessons">Lessons</Link></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4 className={styles.title}>Socials</h4>
            <ul>
              <li><a href="https://www.linkedin.com/in/srushti-dhobley-43a842202/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.behance.net/srushtidho48b4" target="_blank" rel="noopener noreferrer">Behance</a></li>
              <li><a href="https://www.instagram.com/srushti_dhobley/?igsh=MWpvZ2twam95aGp2cQ%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.contactAction}>
          <Button variant="primary" onClick={handleContactClick}>
            CONTACT ME →
          </Button>
        </div>
      </div>

      <div className={styles.signature}>
        Srushti
      </div>
    </footer>
  );
};

export default Footer;