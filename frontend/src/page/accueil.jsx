import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './accueil.module.css'
import banner from '../assets/banner_background.jpeg';



function Accueil() {
  const [logements, setLogements] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur de récupération des données')
        }
        return response.json()
      })
      .then((data) => {
        setLogements(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Erreur :', error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Chargement en cours...</div>
  }

  return (
    <main className={styles.accueil}>
      {/* Bannière */}
    <section
      className={styles.banniere}
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className={styles.overlay}></div>
      <h1 className={styles.titre}>Chez vous, partout et ailleurs</h1>
    </section>

      {/* Grille des cartes */}
      <section className={styles.galerie}>
        {logements.map((logement) => (
          <Link
            to={`/maison/${logement.id}`}
            key={logement.id}
            className={styles.card}
          >
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Accueil