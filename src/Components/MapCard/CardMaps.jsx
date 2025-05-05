import React from 'react'

function CardMaps({ name, screenshot, gamemodes, location, onClick }) {

  return (

    <div className="group w-full sm:w-[300px] max-w-full mx-auto my-6 bg-black/20 rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
  onClick={onClick}>

      <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={screenshot}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out" />
      </div>

      <div className="p-5">
        <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
        <p className="text-sm text-gray-400 mb-3 ">📍 {location}</p>

        <div className="flex-wrap gap-2">
          {gamemodes.map((modo, index) => (
            <span
              key={index}
              className="bg-emerald-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {modo}
            </span>
          ))}
        </div>

      </div>


    </div>
  );
}

export default CardMaps