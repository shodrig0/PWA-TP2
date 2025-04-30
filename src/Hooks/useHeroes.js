import { useState, useEffect, useCallback } from "react"

const useHeroes = () => {

    const [character, setCharacter] = useState(null)
    const [searchValue, setSearchValue] = useState("")

    const getDetailsCharacter = useCallback(async () => {
        try {
            const charResult = await fetch(
                `https://overfast-api.tekrop.fr/heroes/${searchValue}`)

            if (!charResult.ok) {
                throw new Error('No hay heroe')
            }

            const characterObtained = await charResult.json()
            setCharacter(characterObtained)
        } catch (error) {
            console.log("+++++", error, "+++++")
        }
    }, [searchValue])

    console.log('-------')
    console.log(character)
    console.log('-------')

    useEffect(() => {
        if (searchValue) {
            getDetailsCharacter()
        }
    }, [searchValue, getDetailsCharacter])

    const onSearchChangeHandle = (value) => {
        setSearchValue(value)
    }

    const onSearchClickHandle = () => {
        getDetailsCharacter()
    }

    return {
        character,
        searchValue,
        onSearchChangeHandle,
        onSearchClickHandle
    }

}

export default useHeroes