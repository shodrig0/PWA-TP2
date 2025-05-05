import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../Const/const"

const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

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


    const onRoleChangeHandle = (role) => {
        if (role === "" || role === "all") {
            setFilteredHeroes(heroes);
        } else {
            const filtered = heroes.filter((hero) => hero.role === role);
            setFilteredHeroes(filtered);
        }
    }

    const handleHeroClick = (heroId) => {
        const url = NAVEGACION.heroDetails.replace(':heroId', heroId)
        navigate(url)
    }

    return {
        heroes: filteredHeroes,
        searchValue,
        onRoleChangeHandle,
        orderAlphabetically,
        onSearchChangeHandle,
        loading,
        handleHeroClick
    }

}

export default useHeroes