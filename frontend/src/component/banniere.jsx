import './banniere.css';

export default function Banniere({ image, titre }) {
  return (
    <section
      className="banniere"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay"></div>
      <h1 className="titre">{titre}</h1>
    </section>
  );
}