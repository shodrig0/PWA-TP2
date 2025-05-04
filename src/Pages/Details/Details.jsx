import { NAVEGACION } from "../../utils/const"
import Navbar from "../../Components/Navbar/Navbar"
import Button from "../../Components/Button/Button"
import HeroDetails from "../../Components/Containers/ContainerDetails/ContainerHeroDetails"
import useHeroes from "../../Hooks/useHeroes"
// import Title from "../../Components/Title/Title"

const Details = () => {
  const { loading } = useHeroes()


  return (
    <div className="bg-black" >
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <img src="/spinerOverwatch.gif" alt="Loading..." />
        </div>
      ) : (
        <>
          <HeroDetails className="bg-black" />
        </>
      )}
    </div>
  )
}

export default Details

