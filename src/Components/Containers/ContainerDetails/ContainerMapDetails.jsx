import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MapDetails = () => {

    const { name } = useParams();
    const [map, setMap] = useState(null);

    useEffect(() => {
        fetch(`/api/maps`)
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

export default MapDetails