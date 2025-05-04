import { NAVEGACION } from '../../utils/const' // ?
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'
import useMaps from '../../Hooks/useMaps'

const Navbar = () => {
    const { heroes, searchValue: heroSearchValue, onSearchChangeHandle: onHeroSearchChange, loading: loadingHeroes } = useHeroes()
    const { maps, searchValue: mapSearchValue, onSearchChangeHandle: onMapSearchChange, loading: loadingMaps } = useMaps()

    const navigate = useNavigate()

    const handleGoToAboutUs = () => {
        navigate(NAVEGACION.aboutUs)
    }

    const list = [
        ...heroes.map((hero) => ({ ...hero, type: 'hero' })),
        ...maps.map((map) => ({ ...map, type: 'map' }))
    ]

    // console.log("Lista combinada:", list)

    const handleItemClick = (item) => {
        if (item.type === 'hero') {
            navigate(NAVEGACION.detailsHero.replace(':heroId', item.key))
        } else if (item.type === 'map') {
            navigate(NAVEGACION.detailsMap.replace(':name', item.name))
        } else {
            console.error('Tipo desconocido:', item.type);
        }
    }

    return (
        <div className="relative w-full flex items-center justify-between z-20 p-4 bg-gray-800 text-white">
            <Input
                className="border border-gray-300 rounded-lg p-2 w-1/2"
                value={heroSearchValue || mapSearchValue}
                onChange={(e) => {
                    const value = e.target.value
                    onHeroSearchChange(value)
                    onMapSearchChange(value)
                }}
                placeholder="Buscar héroes o mapas"
            />
            {heroSearchValue.trim() !== "" || mapSearchValue.trim() !== "" ? (
                <div className="absolute top-full left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    {loadingHeroes || loadingMaps ? (
                        <p className="p-2 text-gray-400">Loading...</p>
                    ) : list.length > 0 ? (
                        list.map((item) => (
                            <div
                                key={item.type === 'hero' ? item.key : item.name}
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleItemClick(item)}
                            >
                                {item.type === 'hero' ? (
                                    <>
                                        <img
                                            src={item.portrait}
                                            alt={item.name}
                                            className="inline-block w-8 h-8 mr-2 rounded-full"
                                        />
                                        <span>{item.name}</span>
                                    </>
                                ) : (
                                    <span>{item.name}</span>
                                )}
                            </div>
                        ))
                    ) : (
                        <p className="p-2 text-gray-400">No results</p>
                    )}
                </div>
            ) : null}
            <Button className={``} onClick={() => { }} name={`Favourites`} />
            <Button className={``} onClick={handleGoToAboutUs} name={`About us`} />
            <Button />
        </div>
    )
}

export default Navbar