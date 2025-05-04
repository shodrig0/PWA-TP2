import { useState, useEffect, useCallback } from "react"

function useMaps() {
    const [maps, setMaps] = useState([])
    const [filteredMaps, setFilteredMaps] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchMaps = useCallback(async () => {
        try {
            setLoading(true)
            const response = await fetch(`/api/maps`)

            if (!response.ok) {
                throw new Error("Error al obtener los mapas")
            }

            const data = await response.json();
            setMaps(data)
            setFilteredMaps(data)
        } catch (error) {
            console.error("Error al obtener los mapas:", error)
            setMaps([])
            setFilteredMaps([])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchMaps()
    }, [fetchMaps])

    useEffect(() => {
        if (searchValue.trim() === "") {
            setFilteredMaps(maps)
        } else {
            const filtered = maps.filter((map) => map.name.toLowerCase().startsWith(searchValue.toLowerCase()))
            setFilteredMaps(filtered)
        }
    }, [searchValue, maps])

    const onSearchChangeHandle = (value) => {
        setSearchValue(value)
    }

    const getMapByName = useCallback((name) => {

        if (!name) {
            console.log("No name")
            return null
        }

        const foundMap = maps.find(map => {
            const nameMatches = map.name.toLowerCase() === name.toLowerCase().trim();
            console.log(`Comparando: '${map.name.toLowerCase()}' con '${name.toLowerCase().trim()}', resultado: ${nameMatches}`)
            return nameMatches;
        })

        console.log("Resultado final:", foundMap)
        return foundMap || null
    }, [maps])

    // console.log("Mapas filtrados: ", filteredMaps)

    return {
        maps: filteredMaps,
        allMaps: maps,
        searchValue,
        onSearchChangeHandle,
        loading,
        getMapByName
    }
}

export default useMaps