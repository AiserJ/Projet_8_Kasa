import Rating from './rating.jsx';
import '../styles/hostcard.css';

export default function HostCard({ host = {}, rating = 0 }) {
  const nameParts = (host.name || '').trim().split(' ').filter(Boolean);
  const first = nameParts[0] || '';
  const last = nameParts.slice(1).join(' ') || '';

  return (
    <div className="hostcard">
      <div className="hostcard__top">
        <div className="hostcard__name">
          <span>{first}</span>
          <span>{last}</span>
        </div>
        {host.picture && (
          <img
            className="hostcard__avatar"
            src={host.picture}
            alt={`Hôte : ${host.name}`}
          />
        )}
      </div>
      <div className="hostcard__rating">
        <Rating value={Number(rating)} />
      </div>
    </div>
  );
}