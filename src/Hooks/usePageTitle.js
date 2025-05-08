import { useState, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import { NAVEGACION } from "../Const/const"

const usePageTitle = () => {
    const location = useLocation()
    const { heroId, mapId } = useParams()
    const [pageTitle, setPageTitle] = useState('')

    useEffect(() => {
        if (location.pathname === NAVEGACION.heroDetails.replace(":heroId", heroId) && heroId) {
            setPageTitle(`${heroId} - Hero Details`)
        } else if (location.pathname === NAVEGACION.mapDetails.replace(":name", mapId) && mapId) {
            setPageTitle(`${mapId} - Map Details`)
        } else if (location.pathname === "/details") {
            setPageTitle("422 Error")
        } else {
            switch (location.pathname) {
                case NAVEGACION.home:
                    
                    setPageTitle("Home")
                    break
                case NAVEGACION.aboutUs:
                    setPageTitle("About Us")
                    break
                case NAVEGACION.favourites:
                    setPageTitle("Favourites")
                    break
                case "/":
                    setPageTitle("Welcome to our Project!")
                    break
                default:
                    setPageTitle("404 Page Not Found")
            }
        }
    }, [location, heroId, mapId])

    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

}

export default usePageTitle