import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_kasa.png';
import './head.css';


export default function Head() {
  return (
<header className="header">
  <img src={logo} alt="Logo Kasa" className="logo" />
  <nav>
    <ul className="nav">
      <li><NavLink to="/" className="link">Accueil</NavLink></li>
      <li><NavLink to="/propos" className="link">A Propos</NavLink></li>
    </ul>
  </nav>
</header>
  );
}
