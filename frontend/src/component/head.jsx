import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_kasa.png';
import styles from './head.module.css';


export default function Head() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Logo Kasa" className={styles.logo} />
        <nav>
          <ul className={styles.nav}>
            <li><NavLink to="/" className={styles.link}>Accueil</NavLink></li>
            <li><NavLink to="/propos" className={styles.link}>A Propos</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}