import { useState, useEffect } from 'react';
import Banniere from '../component/banniere';
import Carte from '../component/carte';
import banner from '../assets/banner_background.jpeg';
import './accueil.css';

// Création de tableau et booléan chargement des données //

function Accueil() {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Appel d'API des données des maisons //

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((res) => {
        if (!res.ok) throw new Error('Erreur de récupération');
        return res.json();
      })
      .then((data) => {
        setLogements(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // Chargement tant que isLoading est true //
  
  if (isLoading) return <div>Chargement en cours...</div>;

  return (
    <main className="accueil">
      <Banniere image={banner} titre="Chez vous, partout et ailleurs" />

      <section className="galerie">
        {logements.map((logement) => (
          <Carte
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
            location={logement.location}
          />
        ))}
      </section>
    </main>
  );
}

export default Accueil;