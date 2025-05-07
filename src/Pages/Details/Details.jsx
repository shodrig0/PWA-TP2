import { useLocation, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footerr/Footer"
import Button from "../../Components/Button/Button"
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

 

  // console.log(location.pathname)

  return (
    <div className="bg-black">
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
              <Button
                className="mt-6 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
                onClick={handleGoToHome}
                name="Go to Home"
              />
            </div>
          )}
          {/* <Button
            className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
            onClick={handleGoToHome}
            name="Home"
          /> */}
        </>
      )}
      <Footer />
    </div>
  )
}

export default Details

