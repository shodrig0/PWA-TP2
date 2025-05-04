import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { NAVEGACION } from '../../../utils/const'
import Header from '../../Header/Header'
import Button from '../../Button/Button'
import useMaps from '../../../Hooks/useMaps'

const MapDetails = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const { allMaps, loading, getMapByName } = useMaps()
    const [map, setMap] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const foundMap = getMapByName(name)
        if (foundMap) {
            setMap(foundMap)
            setError(null)
        } else {
            setError(`Mapa no encontrado: ${name}`)
            setMap(null)
        }
    }, [name, allMaps, loading, getMapByName])

    const handleBackToHome = () => {
        navigate(NAVEGACION.home)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Cargando mapas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 text-white">
                <Header />
                <div className="bg-red-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold">Error</h2>
                    <p>{error}</p>
                    <Button
                        className="mt-4 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded"
                        onClick={handleBackToHome}
                        name="Volver al inicio"
                    />
                </div>
            </div>
        );
    }

    if (!map) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>No hay información del mapa disponible</p>
            </div>
        )
    }

    return (
        <>
            <Header />
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
                <Button
                    className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                    onClick={handleBackToHome}
                    name="Home"
                />
            </div>
        </>
    );
};

export default MapDetails;