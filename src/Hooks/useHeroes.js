import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../Const/const"

const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [filteredHeroes, setFilteredHeroes] = useState([])
    const [favourites, setFavourites] = useState(() => {
        const storedFavourites = localStorage.getItem("favourites")
        return storedFavourites ? JSON.parse(storedFavourites) : []
    })
    const [searchValue, setSearchValue] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const getHeroes = useCallback(async () => {
        try {
            setLoading(true)

            const url = `${import.meta.env.VITE_API_URL}/heroes`
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
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

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

    const addFavouriteHero = (heroId) => {
        setFavourites((hFavourite) => {
            const updatedFavourites = hFavourite.includes(heroId)
                ? hFavourite.filter((key) => key !== heroId)
                : [...hFavourite, heroId]
            console.log("Heroes actualizados:", updatedFavourites)
            return updatedFavourites
        })
    }

    const favHeroes = heroes.filter((hero) => favourites.includes(hero.key))

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
        favourites,
        addFavouriteHero,
        handleHeroClick,
        favHeroes
    }

}

export default useHeroes