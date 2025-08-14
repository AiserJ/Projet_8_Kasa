import { Link } from "react-router-dom";
import "../styles/nontrouve.css";

export default function Nontrouve() {
  return (
    <section className="notfound">
      <h1 className="notfound__code">404</h1>
      <p className="notfound__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="notfound__link">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}