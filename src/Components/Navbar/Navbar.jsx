
import { NAVEGACION } from '../../Const/const' // ?
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'
import useMaps from "../../Hooks/useMaps"


const Navbar = () => {
    const { heroes, handleHeroClick } = useHeroes()
    const { maps, handleMapClick } = useMaps()
    const [searchValue, setSearchValue] = useState("")
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        let timeout = setTimeout(() => {
            setVisible(false)
        }, 4000)

        const handleUserInteraction = () => {
            setVisible(true)
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                setVisible(false)
            }, 4000)
        }

        window.addEventListener('mousemove', handleUserInteraction)
        window.addEventListener('touchstart', handleUserInteraction)

        return () => {
            clearTimeout(timeout)
            window.removeEventListener('mousemove', handleUserInteraction)
            window.removeEventListener('touchstart', handleUserInteraction)
        }
    }, [])

    const handleGoToAboutUs = () => navigate(NAVEGACION.aboutUs)

    const onSearchChangeHandle = (e) => {
        setSearchValue(e.target.value)
    }

    const filteredHeroes = heroes.filter(hero =>
        hero.name.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    const filteredMaps = maps.filter(map =>
        map.name.toLowerCase().startsWith(searchValue.toLowerCase())
    )

    return (
        <div className={`transition-all duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed w-full z-40 p-4  text-white md:flex items-center justify-between`} style={{ backgroundColor: '#111F27' }}>
            <Input
                className="border w-xs border-gray-300 rounded-lg ml-3 p-2 md:w-1/2"
                value={searchValue}
                onChange={onSearchChangeHandle}
                placeholder="Search"
            />

            {searchValue.trim() !== "" && (
                <div className="absolute top-full ml-5 left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    <div className="p-2 bg-gray-700 text-sm font-bold">Heroes</div>
                    {filteredHeroes.length > 0 ? (
                        filteredHeroes.map(hero => (
                            <div
                                key={hero.name}
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleHeroClick(hero.key)}
                            >
                                <img src={hero.portrait} alt={hero.name} className="w-8 h-8 mr-2 rounded-full" />
                                <span>{hero.name}</span>
                            </div>
                        ))
                    ) : <p className="p-2 text-gray-400">No heroes found</p>}

                    <div className="p-2 bg-gray-700 text-sm font-bold">Maps</div>
                    {filteredMaps.length > 0 ? (
                        filteredMaps.map(map => (
                            <div
                                key={map.name}
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleMapClick(map.name)}
                            >
                                <img src={map.screenshot} alt={map.name} className="w-8 h-8 mr-2 rounded-full" />
                                <span>{map.name}</span>
                            </div>
                        ))
                    ) : <p className="p-2 text-gray-400">No maps found</p>}
                </div>
            )}

            <Button className="font-primary w-full text-xs md:text-xl" onClick={() => { }} name="FAVOURITES" />
            <Button className="font-primary w-full text-xs md:text-xl" onClick={handleGoToAboutUs} name="ABOUT US" />
            <Button />
        </div>
    )
}

export default Navbar
