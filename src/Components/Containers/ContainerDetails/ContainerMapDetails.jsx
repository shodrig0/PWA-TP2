import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMaps from '../../../Hooks/useMaps'

const MapDetails = () => {

    const { name } = useParams()
    const { maps, loading } = useMaps()
    const [map, setMap] = useState(null)

    useEffect(() => {
        if (maps) {
            const found = maps.find((m) => m.name === name)
            setMap(found)
        }
    }, [maps, name])

    if (loading || !map) return <p>Loading...</p>;

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