import React from 'react'
import CardHeroe from './cardHeroe/CardHeroe'

function containerCardHeroe({heroes}) {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 py-6 flex justify-center">
    <div className="w-[80%] grid gap-6"
         style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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
