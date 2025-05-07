import { NAVEGACION } from '../../Const/const' // ?
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../Input/Input'
import Button from '../Button/Button'
import useHeroes from '../../Hooks/useHeroes'
import useMaps from "../../Hooks/useMaps"
import { useTranslation } from 'react-i18next'


const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { heroes, handleHeroClick } = useHeroes()
    const { maps, handleMapClick } = useMaps()
    const [searchValue, setSearchValue] = useState("")
    const [visible, setVisible] = useState("");
    const navigate = useNavigate()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
      };


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
    const handleGoToFavourites = () => {
        navigate(NAVEGACION.favourites)
    }
    const handleGoToHome = () => {
        navigate(NAVEGACION.home)
      }
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
        <div
  className={`transition-all duration-500 ease-in-out ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed top-0 w-full z-40 p-4 text-white md:flex items-center justify-between`}
  style={{ backgroundColor: '#111F27' }}
>
            <Button className="bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg" onClick={handleGoToHome} name={t("home")} />
            
            <Input
                className="border w-xs border-gray-300 rounded-lg ml-3 p-2"
                value={searchValue}
                onChange={onSearchChangeHandle}
                placeholder={t("search")}            />

            {searchValue.trim() !== "" && (
                <div className="absolute top-full ml-5 left-0 w-1/2 bg-gray-800 text-white shadow-lg max-h-64 overflow-y-auto">
                    <div className="p-2 bg-gray-700 text-sm font-bold">{t("heroes")}</div>
                    {filteredHeroes.length > 0 ? (
                        filteredHeroes.map(hero => (
                            <div
                                key={hero.name}
                                className="p-2 w-xs hover:bg-gray-600 cursor-pointer flex items-center"
                                onClick={() => handleHeroClick(hero.key)}
                            >
                                <img src={hero.portrait} alt={hero.name} className="w-8 h-8 mr-2 rounded-full" />
                                <span>{hero.name}</span>
                            </div>
                        ))
                    ) : <p className="p-2 text-gray-400">{t("noHeroesFound")}</p>}

                    <div className="p-2 bg-gray-700 text-sm font-bold">{t("maps")}</div>
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
                    ) : <p className="p-2 text-gray-400">{t("noMapsFound")}</p>}
                </div>
            )}

            
                
            <Button className=" font-primary w-full text-xs md:text-xl cursor-pointer" onClick={handleGoToFavourites}  name={t("favourites")} />
            <Button className="  font-primary w-full text-xs md:text-xl cursor-pointer" onClick={handleGoToAboutUs} name={t("aboutUs")}/>
            <Button />
            <Button className="  font-primary w-full text-xs md:text-xl cursor-pointer" onClick={toggleLanguage}  name={`🌐 ${i18n.language.toUpperCase()}`} />    
</div>
    )
}

export default Navbar
