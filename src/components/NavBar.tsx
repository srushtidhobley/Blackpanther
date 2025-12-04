// src/components/Navbar.tsx

import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import styles from './Navbar.module.css';
import profileImg from '../assets/images/profile.jpg';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLetsTalkClick = () => {
    navigate('/contact');
  };

  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.logoContainer}>
        <img src={profileImg} alt="Profile" className={styles.profilePic} />
        <span className={styles.logo}>Srushti</span>
      </Link>

      <nav>
        <div className={styles.pillNav}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={location.pathname === '/projects' ? styles.active : ''}>Projects</Link>
            </li>
            <li>
              <Link to="/gallery" className={location.pathname === '/gallery' ? styles.active : ''}>Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.navAction}>
        <Button variant="primary" onClick={handleLetsTalkClick}>
          Let's Talk
        </Button>
      </div>
    </header>
  );
};

export default Navbar;