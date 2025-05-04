import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import Navbar from "../../Components/Navbar/Navbar"
import Button from "../../Components/Button/Button"
import HeroDetails from "../../Components/Containers/ContainerDetails/ContainerHeroDetails"
import useHeroes from "../../Hooks/useHeroes"
// import Title from "../../Components/Title/Title"

const Details = () => {
  const { loading } = useHeroes()
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate(NAVEGACION.home)
  }

  return (
    <div className="bg-black" >
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <img src="/spinerOverwatch.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          <HeroDetails className="bg-black"/>
          <Button
            className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
            onClick={handleGoToHome}
            name="Back"
          />
        </>
      )}
    </div>
  )
}

export default Details

