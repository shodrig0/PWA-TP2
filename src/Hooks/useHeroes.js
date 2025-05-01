import { useState, useEffect, useCallback } from "react"

const useHeroes = () => {

    const [heroes, setHeroes] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const getHeroes = useCallback(async () => {
        try {
            const url = searchValue ? `/api/heroes/${searchValue}` : `/api/heroes/`
            const resp = await fetch(url)
            if (!resp.ok) {
                throw new Error('No hay heroe')
            }

            const data = await resp.json()
            setHeroes(data)
        } catch (error) {
            console.log("+++++", error, "+++++")
        }
    }, [searchValue])

    console.log('-------')
    console.log(heroes)
    console.log('-------')

    useEffect(() => {
        getHeroes()
    }, [getHeroes])

    const onSearchChangeHandle = (value) => {
        setSearchValue(value)
    }

    // const onSearchClickHandle = () => {
    //     getHeroes()
    // }

    return {
        heroes,
        searchValue,
        onSearchChangeHandle,
        // onSearchClickHandle
    }

}

export default useHeroes