import { Link } from 'react-router-dom';
import './carte.css';

// Structure de la carte, sans appel à l'API // 

export default function Carte({ id, cover, title, location }) {
  return (
    <Link to={`/maison/${id}`} className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <p>{location}</p>
    </Link>
  );
}