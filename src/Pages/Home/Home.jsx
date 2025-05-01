// import useHeroes from "../../Hooks/
import Header from "../../Components/Header/Header"
import React from 'react'

function Home() {
  // const { heroes } = useHeroes()

  return (
    <>
      <Header />
      {/* <div>
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
      </div> */}
    </>
  )
}

export default Home
