import React from 'react'
import CardHeroe from '../../HeroCard/CardHeroe'
import useHeroes from '../../../Hooks/useHeroes'

function ContainerCardHeroe({ heroes }) {

  const { handleHeroClick } = useHeroes()

  return (
    <div className="min-h-screen w-full md:w-[80%] bg-black py-6 flex justify-center">

      <div className=" grid gap-1 grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
        {heroes.map((hero) => (
          <CardHeroe
            key={hero.key}
            name={hero.name}
            portrait={hero.portrait}
            role={hero.role}
            onClick={() => handleHeroClick(hero.key)}
          />
        ))}
      </div>
    </div>

  )
}

export default ContainerCardHeroe