import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import useHeroes from "../../Hooks/useHeroes"
import React from 'react'

function Home() {
  const { heroes } = useHeroes()
  const navigate = useNavigate()
  const irDetalles = () => {
    navigate(NAVEGACION.details)
  }
  return (
    <div>
      <button onClick={irDetalles}>go to details</button>
      <div>
        {heroes.length > 0 ? (
          heroes.map((hero) => (
            <div key={hero.name}>
              <h4>{hero.name}</h4>
              {hero.portrait && <img src={hero.portrait} />}
            </div>
          ))
        ) : (
          <p>loading</p>
        )

        }
      </div>
    </div>
  )
}

export default Home
