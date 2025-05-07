import React from 'react'
import CardHeroe from '../../HeroCard/CardHeroe'
import useHeroes from '../../../Hooks/useHeroes'
import { useTranslation } from 'react-i18next';

function ContainerCardHeroe({ heroes }) {

<<<<<<< HEAD
  const { handleHeroClick } = useHeroes()
  const { t } = useTranslation();
=======
  const { handleHeroClick, favourites, addFavouriteHero } = useHeroes()
>>>>>>> df2c3506a63ca2979f25c036a3d159c360d041a1

  return (
    <div className="w-full flex justify-center mt-6">

      <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-2 
          w-full
          md:w-[90%] 
          max-w-7xl
        ">
        {heroes.map((hero) => (
          <CardHeroe
            key={hero.key}
            name={hero.name}
            portrait={hero.portrait}
            // role={t(`filters.roles.${hero.role}`)} // traducido
            role={hero.role} // sin traducir, para imagen
            onClick={() => handleHeroClick(hero.key)}
            isFavourite={favourites.includes(hero.key)}
            addFavouriteHero={() => addFavouriteHero(hero.key)}
          />
        ))}
      </div>
    </div>

  )
}

export default ContainerCardHeroe