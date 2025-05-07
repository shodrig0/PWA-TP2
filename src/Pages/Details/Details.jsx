import { useNavigate, useLocation, useParams } from "react-router-dom"
import { NAVEGACION } from "../../Const/const"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import Button from "../../Components/Button/Button"
import HeroDetails from "../../Components/Containers/ContainerDetails/ContainerHeroDetails"
import MapDetails from "../../Components/Containers/ContainerDetails/ContainerMapDetails"
import useHeroes from "../../Hooks/useHeroes"
import useMaps from "../../Hooks/useMaps"
// import Title from "../../Components/Title/Title"

const Details = () => {
  const { heroId, mapId } = useParams()
  const location = useLocation()
  const { loading: heroesLoading } = useHeroes()
  const { loading: mapsLoading } = useMaps()
  const navigate = useNavigate()

  const isHeroDetail = location.pathname.includes('/hero/') || !!heroId
  const isMapDetail = location.pathname.includes('/map/') || !!mapId

  const loading = isHeroDetail ? heroesLoading : mapsLoading

  const handleGoToHome = () => {
    navigate(NAVEGACION.home)
  }

  return (
    <div className="bg-black" >
      <Header />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <img src="/spinerOverwatch.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          {isHeroDetail && <HeroDetails className="bg-black" />}
          {isMapDetail && <MapDetails className="bg-black" />}
          <Button
            className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
            onClick={handleGoToHome}
            name="Home"
          />
        </>
      )}
      <Footer />
    </div>
  )
}

export default Details

