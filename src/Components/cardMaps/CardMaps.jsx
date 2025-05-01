import React from 'react'

function CardMap({ name, screenshot, gamemodes }) {
    return (
      <div className="w-full max-w-5xl mx-auto my-6 bg-black/2 rounded-xl overflow-hidden shadow-md border border-white/10">
        {/* Imagen tipo banner */}
        <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden">
          <img
            src={screenshot}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Contenido: nombre + modos */}
        <div className="p-5">
          <h2 className="text-white text-2xl font-bold mb-2">{name}</h2>
          
          <div className="flex flex-wrap gap-2">
            {gamemodes.map((modo, index) => (
              <span
                key={index}
                className="bg-emerald-600/80 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {modo}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default CardMap
