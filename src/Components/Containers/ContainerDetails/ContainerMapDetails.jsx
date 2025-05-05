import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NAVEGACION } from '../../../utils/const'
import useMaps from '../../../Hooks/useMaps'

const MapDetails = () => {

    const { name } = useParams()
    const { getMapByName } = useMaps()
    const [map, setMap] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!name) {
            setError("No se proporcionó un nombre de mapa")
            return
        }

        const foundMap = getMapByName(name)
        if (foundMap) {
            setMap(foundMap)
            setError(null)
        } else {
            setError(`Mapa no encontrado: ${name}`)
            setMap(null)
        }
    }, [name, getMapByName])

    if (error) {
        return (
            <div className="p-6 text-white">
                <div className="bg-red-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold">Error</h2>
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    if (!map) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>No hay información del mapa disponible</p>
            </div>
        )
    }

    return (
        <div className="p-6 max-w-6xl mx-auto text-white">
            <div className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <h2 className="text-3xl font-bold p-4">{map.name}</h2>
                {map.screenshot && (
                    <img src={map.screenshot} alt={map.name} className="w-full h-auto" />
                )}
                <div className="p-6 space-y-4">
                    <p><strong>Tipo:</strong> {map.gamemodes?.join(", ") || "No disponible"}</p>
                    <p><strong>Ubicación:</strong> {map.location || "No disponible"}</p>
                    {map.country_code && <p><strong>País:</strong> {map.country_code}</p>}
                </div>
            </div>
        </div>
    )

}

export default MapDetails