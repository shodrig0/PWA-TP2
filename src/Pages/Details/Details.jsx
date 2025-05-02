import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import Navbar from "../../Components/Navbar/Navbar"
import Button from "../../Components/Button/Button"
import HeroDetails from "../../Components/Containers/ContainerDetails/ContainerHeroDetails"
// import Title from "../../Components/Title/Title"

const Details = () => {
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate(NAVEGACION.home)
  }

  return (
    <>
      <Navbar />
      <HeroDetails />
      <Button
        className="fixed bottom-6 right-6 z-50 bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg"
        onClick={handleGoToHome}
        name="Back"
      />
    </>
  )
}

export default Details