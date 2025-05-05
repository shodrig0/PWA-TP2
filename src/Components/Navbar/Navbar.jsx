
import { NAVEGACION } from '../../utils/const' // ?
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'
import useMaps from "../../Hooks/useMaps"


const Navbar = () => {
    const { heroes, searchValue, onSearchChangeHandle, loading } = useHeroes()
    const { maps } = useMaps()

    const navigate = useNavigate()

    const handleHeroClick = (heroId) => {
        const url = NAVEGACION.details.replace(':heroId', heroId)
        navigate(url)
    }

    const handleMapClick = (mapId) => {
        const url = NAVEGACION.details.replace(':mapId', mapId)
        navigate(url)
    }

    const handleGoToAboutUs = () => {
        const urlAboutUs = NAVEGACION.aboutUs
        navigate(urlAboutUs)
    }

    const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().startsWith(searchValue.toLowerCase())
    )
    const filteredMaps = maps.filter((map) =>
        map.name.toLowerCase().startsWith(searchValue.toLowerCase())
    )


    return (
        <div className="relative w-full flex items-center justify-between z-20 p-4 bg-gray-800 text-white">
            <Input
                className="border border-gray-300 rounded-lg ml-3 p-2 w-1/2"
                value={searchValue}
                onChange={onSearchChangeHandle}
                placeholder="Search"
            />

            {searchValue.trim() !== "" && (
                <div className="absolute top-full ml-5 left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    <div className="p-2 bg-gray-700 text-sm font-bold text-white-300">
                        Heroes
                    </div>
                    {loading ? (
                        <p className="p-2 text-gray-400">Loading...</p>
                    ) : filteredHeroes.length > 0 ? (
                        filteredHeroes.map((hero) => (
                            <div
                                key={hero.name}
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleHeroClick(hero.key)}
                            >
                                <img
                                    src={hero.portrait}
                                    alt={hero.name}
                                    className="inline-block w-8 h-8 mr-2 rounded-full"
                                />
                                <span>{hero.name}</span>
                            </div>
                        ))
                    ) : (
                        <p className="p-2 text-gray-400">No heroes found</p>
                    )}

                    <div className="p-2 bg-gray-700 text-sm font-bold text-white-300">
                        Maps
                    </div>
                    {loading ? (
                        <p className="p-2 text-gray-400">Loading...</p>
                    ) : filteredMaps.length > 0 ? (
                        filteredMaps.map((map) => (
                            <div
                                key={map.name}
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleMapClick(map.name)}
                            >
                                <img
                                    src={map.screenshot}
                                    alt={map.name}
                                    className="inline-block w-8 h-8 mr-2 rounded-full"
                                />
                                <span>{map.name}</span>
                            </div>
                        ))
                    ) : (
                        <p className="p-2 text-gray-400">No maps found</p>
                    )}
                </div>
            )}

            <Button className={``} onClick={() => { }} name={`Favourites`} />
            <Button className={``} onClick={handleGoToAboutUs} name={`About us`} />
            <Button />
        </div>
    )
}

export default Navbar