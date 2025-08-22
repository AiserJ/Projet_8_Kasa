import '../styles/rating.css'
export default function Rating({ value }) {
  const totalStars = 5

  /// Vérification du nombre d'étoiles dans la boucle pour afficher en conséquence ///
  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1
        return (
          <span
            key={index}
            className={`star ${starValue <= value ? 'filled' : 'empty'}`}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}