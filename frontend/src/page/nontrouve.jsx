import { Link } from 'react-router-dom';

export default function NonTrouve() {
  return (
    <div>
      <h1>404 - Page non trouvée</h1>
      <Link to="/">Retour à l’accueil</Link>
    </div>
  );
}