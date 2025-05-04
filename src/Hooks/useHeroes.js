import { useState, useEffect, useCallback } from "react"

const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)


    const getHeroes = useCallback(async () => {
        try {
            setLoading(true)

            const url = `/api/heroes`
            const resp = await fetch(url)

            if (!resp.ok) {
                throw new Error('No hero')
            }

            const data = await resp.json()
            setHeroes(data)
            setFilteredHeroes(data)
        } catch (error) {
            console.log("+++++", error, "+++++")
            setHeroes([])
            setFilteredHeroes([])
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getHeroes()
    }, [getHeroes])

    useEffect(() => {
        if (searchValue.trim() === "") {
            setFilteredHeroes(heroes)
        } else {
            const filtered = heroes.filter((hero) => hero.name.toLowerCase().startsWith(searchValue.toLowerCase()))
            setFilteredHeroes(filtered)
        }
    }, [searchValue, heroes])

    const onSearchChangeHandle = (value) => {
        setSearchValue(value)
    }

    const orderAlphabetically = (order = 'asc') => {
        const sorted = [...filteredHeroes].sort((a, b) => {
            return order === 'asc'
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name);
        });

        setFilteredHeroes(sorted);
    };




    return {
        heroes: filteredHeroes,
        searchValue,
        orderAlphabetically,
        onSearchChangeHandle,
        loading
    }

}

export default useHeroes