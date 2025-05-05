import React from 'react'
import CardHeroe from '../../cardHeroe/cardHeroe'

function containerCardHeroe({ heroes }) {
  return (
<div className="min-h-screen w-[80%]  bg-black px-4 sm:px-8 py-6 block md:flex justify-center">
  <div className="w-full grid gap-1 grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 ">
    {heroes.map((hero) => (
      <CardHeroe
        key={hero.key}
        name={hero.name}
        portrait={hero.portrait}
        role={hero.role}
      />
    ))}
  </div>
</div>




  )
}

export default containerCardHeroe