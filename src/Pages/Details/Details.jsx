import { useNavigate, useLocation, useParams } from "react-router-dom"
import { NAVEGACION } from "../../Const/const"
import Header from "../../Components/Header/Header"
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
          
        </>
      )}
    </div>
  )
}

export default Details

