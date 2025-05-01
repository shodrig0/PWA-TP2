import { NAVEGACION } from '../../utils/const' // ?
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'

const Navbar = () => {
    const { heroes, searchValue, onSearchChangeHandle, loading } = useHeroes()

    const navigate = useNavigate()

    const handleHeroClick = (heroId) => {
        const url = NAVEGACION.details.replace(':heroId', heroId)
        navigate(url)
    }

    return (
        <div className="relative flex items-center justify-between p-4 bg-gray-800 text-white">
            <Input
                className="border border-gray-300 rounded-lg p-2 w-1/2"
                value={searchValue}
                onChange={onSearchChangeHandle}
                placeholder="Search"
            />
            {/* no quedaría mejor en un componenete? */}
            {searchValue.trim() !== "" && (
                <div className="absolute top-full left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    <div className="p-2 bg-gray-700 text-sm font-bold text-white-300">
                        Hero
                    </div>
                    {loading ? (
                        <p className="p-2 text-gray-400">Loading...</p>
                    ) : heroes.length > 0 ? (
                        heroes.map((hero) => (
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
                        <p className="p-2 text-gray-400">No results found</p>
                    )}
                </div>
            )}
            {/* no funcan tdodavia */}
            <Button className={``} onClick={() => { }} name={`Favourites`} />
            <Button className={``} onClick={() => { }} name={`About us`} />
            <Button />
        </div>
    )
}

export default Navbar