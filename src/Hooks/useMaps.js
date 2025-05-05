import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../utils/const"

function useMaps() {
    const [maps, setMaps] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchMaps() {
            try {
                const response = await fetch(`/api/maps`)

                if (!response.ok) {
                    throw new Error("Error al obtener los mapas")
                }

                const data = await response.json()
                setMaps(data)
            } catch (error) {
                console.error("Error al obtener los mapas:", error)
            }
        }

        fetchMaps()
    }, [])


    const getMapByName = useCallback((name) => {
        if (!name) {
            console.warn("getMapByName: El parámetro 'name' está vacío o es undefined")
            return null
        }

        const foundMap = maps.find(map => {
            const nameMatches = map.name.toLowerCase() === name.toLowerCase().trim()
            return nameMatches
        })

        if (!foundMap) {
            console.warn(`No se encontró un mapa con el nombre '${name}'`)
        }

        return foundMap || null
    }, [maps])

    const handleMapClick = (mapId) => {
        const url = NAVEGACION.mapDetails.replace(':name', mapId)
        navigate(url)
    }

    return { maps, getMapByName, handleMapClick }
}

export default useMaps