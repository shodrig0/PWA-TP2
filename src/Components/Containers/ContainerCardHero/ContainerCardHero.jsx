import React from 'react'
import CardHeroe from '../../cardHeroe/CardHeroe'

function containerCardHero() {

  const Heroes = [{
    "key": "ana",
    "name": "Ana",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png",
    "role": "support"
  },
  {
    "key": "ashe",
    "name": "Ashe",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8dc2a024c9b7d95c7141b2ef065590dbc8d9018d12ad15f76b01923986702228.png",
    "role": "damage"
  },
  {
    "key": "baptiste",
    "name": "Baptiste",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f979896f74ba22db2a92a85ae1260124ab0a26665957a624365e0f96e5ac5b5c.png",
    "role": "support"
  },
  {
    "key": "bastion",
    "name": "Bastion",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4d715f722c42215072b5dd0240904aaed7b5285df0b2b082d0a7f1865b5ea992.png",
    "role": "damage"
  },
  {
    "key": "brigitte",
    "name": "Brigitte",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48392820c6976ee1cd8dde13e71df85bf15560083ee5c8658fe7c298095d619a.png",
    "role": "support"
  },
  {
    "key": "cassidy",
    "name": "Cassidy",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png",
    "role": "damage"
  },
  {
    "key": "doomfist",
    "name": "Doomfist",
    "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13750471c693c1a360eb19d5ace229c8599a729cd961d72ebee0e157657b7d18.png",
    "role": "tank"
  }]
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {Heroes.map((hero) => (
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

export default containerCardHero
