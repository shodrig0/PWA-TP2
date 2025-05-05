
import { NAVEGACION } from '../../utils/const' // ?
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'
import React, { useState } from "react";
import useMaps from "../../Hooks/useMaps"; // Importa tu hook de mapas


const Navbar = () => {
    const { heroes, searchValue, onSearchChangeHandle, loading } = useHeroes()
    const { maps } = useMaps() // Obtener los mapas desde el hook

    const navigate = useNavigate()

    const handleHeroClick = (heroId) => {
        const url = NAVEGACION.details.replace(':heroId', heroId)
        navigate(url)
    }

    // Maneja el clic sobre un mapa
    const handleMapClick = (mapId) => {
        const url = NAVEGACION.details.replace(':mapId', mapId) // Asumiendo que hay una ruta de detalles para mapas
        navigate(url)
    }

    const handleGoToAboutUs = () => {
        const urlAboutUs = NAVEGACION.aboutUs
        navigate(urlAboutUs)
    }

    const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    const filteredMaps = maps.filter((map) =>
        map.name.toLowerCase().includes(searchValue.toLowerCase())
    )


    return (
        <div className="relative w-full flex items-center justify-between z-20 p-4 bg-gray-800 text-white">
            {/* Input de búsqueda */}
            <Input
                className="border border-gray-300 rounded-lg ml-3 p-2 w-1/2"
                value={searchValue}
                onChange={onSearchChangeHandle}
                placeholder="Search"
            />

            {/* Mostrar los resultados si hay texto de búsqueda */}
            {searchValue.trim() !== "" && (
                <div className="absolute top-full ml-5 left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    {/* Sección de héroes */}
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

                    {/* Sección de mapas */}
                    <div className="p-2 bg-gray-700 text-sm font-bold text-white-300">
                        Maps
                    </div>
                    {loading ? (
                        <p className="p-2 text-gray-400">Loading...</p>
                    ) : filteredMaps.length > 0 ? (
                        filteredMaps.map((map) => (
                            <div
                                key={map.id} // Asegúrate de que cada mapa tiene un id único
                                className="p-2 hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleMapClick(map.id)} // Llama a la función para mapas
                            >
                                <img
                                    src={map.screenshot} // Asegúrate de que el mapa tiene una miniatura
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

            {/* Botones de navegación */}
            <Button className={``} onClick={() => { }} name={`Favourites`} />
            <Button className={``} onClick={handleGoToAboutUs} name={`About us`} />
            <Button />
        </div>
    )
}

export default Navbar