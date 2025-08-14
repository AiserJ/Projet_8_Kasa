import '../styles/rating.css'
export default function Rating({ value }) {
  const totalStars = 5

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