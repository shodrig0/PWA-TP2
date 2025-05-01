import React from 'react'

function CardHeroe({name,portrait,role}) {
  let bgCard="";
  if(role == "tank"){
    bgCard = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Via2t5ZTlrcHFvbng4dW51cG55ZWZjNndiY2wydWp3bHM4d3Z3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cMhglZMLwT8e1jYkfC/giphy.gif"
  }else if(role == "damage"){
    bgCard = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN20zejM1c2xzczNseWo4bWNkYmw5N3p6cmN0bGtyZzhqY3U1Zm85NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NLwQZlo5wA8su4kYhL/giphy.gif"
  }else if (role == "support"){
bgCard="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZhNWE4MnBsZ2t1NmpkYWFhaHozOTgwaTdvYjgybnJmNmE3NnVwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GOFp6uulTA5MzD7hJq/giphy.gif"
  }
  let iconRol={
    tank:"https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf0889daa1ef606db/6504cff74d2a764cb7973991/Tank.svg?format=webply&quality=90",
    damage:"https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt05d482c88096959a/6504cff7d9caa1285f64b6bd/Damage.svg?format=webply&quality=90",
    support:"https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt3ccd5df488163b33/6504cff7fc2ae4d7c50445c4/Support.svg?format=webply&quality=90"
  }
  return (
    <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-lg relative mx-3 my-5">
  {/* Fondo con el GIF y capa roja */}
  
  <div
    className="absolute inset-0 bg-cover bg-center bg-opacity-50"
    
    style={{
      backgroundImage: `url("${bgCard}")`
    }}
  ></div>
  {/* <div className="absolute inset-0 bg-green-900 opacity-60"></div> */}

  {/* Contenedor de la imagen */}
  <div className="flex justify-center items-center aspect-square z-10 relative backdrop-blur-xs bg-white/20 ">
    <img
      src={portrait}
      alt="portrait"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Pie con blur */}
  <div className="flex items-center justify-between px-6 py-5 pr-10 backdrop-blur-ms bg-white/30 z-10 relative">
    <h3 className="text-white font-semibold text-lg">{name}</h3>
    <img
      src={iconRol[role]}
      alt="tank"
      className="w-10 h-10 opacity-75 "
    />
  </div>
</div>

  
  
  )
}

export default CardHeroe
