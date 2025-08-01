import { useParams } from 'react-router-dom';

export default function Maison() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détail du logement</h1>
      <p>ID du logement : {id}</p>
    </div>
  );
}