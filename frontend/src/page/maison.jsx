import { useParams, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import '../styles/maison.css';
import Slidershow from '../component/slidershow.jsx';
import HostCard from '../component/hostcard.jsx';
import Tag from '../component/tag.jsx';
import Collapse from '../component/collapse.jsx';
import data from '../../../backend/data.json';

export default function Maison() {
  const { id } = useParams();

  const logement = useMemo(
    () => data.find((l) => String(l.id) === String(id)),
    [id]
  );

  if (!logement) {
    return <Navigate to="/nontrouve" replace />;
  }

  const {
    title,
    location,
    tags = [],
    rating = 0,
    host = {},
    pictures = [],
    description = '',
    equipments = [],
  } = logement;

  const normalizeToArray = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string') {
      const trySplit = (sep) =>
        value.split(sep).map((s) => s.trim()).filter(Boolean);

      const byNewline = trySplit('\\n');
      if (byNewline.length > 1) return byNewline;

      const byComma = trySplit(',');
      if (byComma.length > 1) return byComma;

      const byDot = trySplit('•');
      if (byDot.length > 1) return byDot;

      return value.trim() ? [value.trim()] : [];
    }
    return [];
  };

  const equipmentList = normalizeToArray(equipments);

  return (
    <div className="page page--maison">
      <main className="container maison">
        <Slidershow pictures={pictures} title={title} />

        <section className="maison__top">
          <div className="maison__left">
            <h1 className="maison__title">{title}</h1>
            <p className="maison__location">{location}</p>
            <div className="maison__tags">
              {tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          <div className="maison__right">
            <HostCard host={host} rating={rating} />
          </div>
        </section>

        <section className="maison__details">
          <Collapse title="Description" content={description} />
          <Collapse title="Équipements">
            <ul className="maison__equipments">
              {equipmentList.map((eq) => (
                <li key={eq}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </section>
      </main>
    </div>
  );
}