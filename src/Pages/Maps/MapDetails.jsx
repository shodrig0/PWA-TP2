import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MapDetail() {
  const { name } = useParams();
  const [map, setMap] = useState(null);

  useEffect(() => {
    fetch('https://overfast-api.tekrop.fr/maps')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((m) => m.name === name);
        setMap(found);
      });
  }, [name]);

  if (!map) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{map.name}</h2>
      <p>Tipo: {map.type}</p>
      <p>Ubicación: {map.location}</p>
      <img src={map.screenshot} alt={map.name} width="300" />
    </div>
  );
}
