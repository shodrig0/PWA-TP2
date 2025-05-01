import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import Button from "../../Components/Button/Button"
// import Title from "../../Components/Title/Title"
// import Input from "../../Components/Input/Input"
// import useHeroes from '../../Hooks/useHeroes'

const Details = () => {
  // const { heroes, searchValue, onSearchClickHandle, onSearchChangeHandle } = useHeroes()
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate(NAVEGACION.home)
  }

  const { heroId } = useParams()
  const [hero, setHero] = useState(null)

  useEffect(() => {
    const heroDetails = async () => {
      try {
        const resp = await fetch(`/api/heroes/${heroId}`)

        if (!resp.ok) {
          throw new Error('No hero')
        }

        const data = await resp.json()
        setHero(data)
      } catch (error) {
        console.log('Error, no data', error)
      }
    }
    heroDetails()
  }, [heroId])

  if (!hero) {
    return <p>Loading...</p>
  }

  return (

    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{hero.name}</h1>
        <img src={hero.portrait} alt={hero.name} />
        <p>{hero.description}</p>
      </div>
      <Button className="btn-success bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded" onClick={handleGoToHome} name={`Back`} />
    </>
  )
}

export default Details