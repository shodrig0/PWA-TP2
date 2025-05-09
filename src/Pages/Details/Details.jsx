import { useLocation, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
// import HeroDetailsdos from "../../Components/Containers/ContainerDetails/ContainerHeroDetailsdos" // <- ignorar
import HeroDetails from "../../Components/Containers/ContainerDetails/ContainerHeroDetails"
import MapDetails from "../../Components/Containers/ContainerDetails/ContainerMapDetails"
import useHeroes from "../../Hooks/useHeroes"
import useMaps from "../../Hooks/useMaps"
import usePageTitle from "../../Hooks/usePageTitle"

const Details = () => {

  usePageTitle()

  const { heroId } = useParams()
  const location = useLocation()
  const { loading: heroesLoading } = useHeroes()
  const { loading: mapsLoading } = useMaps()

  const isHeroDetail = location.pathname.includes('/hero/') || !!heroId
  const isMapDetail = !isHeroDetail

  const loading = isHeroDetail ? heroesLoading : mapsLoading

  return (
    <div
      className="w-full min-h-screen pt-20 font-titillium-web"
      style={{
        backgroundImage: `url('https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <img src="/spinerOverwatch.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          {isHeroDetail && <HeroDetails className="bg-black" />}
          {isMapDetail && <MapDetails className="bg-black" />}
          {!isHeroDetail && !isMapDetail && (
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
              <h1 className="text-4xl font-bold">422 Error</h1>
              <p className="mt-4 text-lg">Invalid details page.</p>

            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  )
}

export default Details

