import React from 'react'
import Button from '../Button/Button'

function CardMaps({ name, screenshot, gamemodes, location, onClick, isFavourite, addFavouriteMap }) {

  return (

    <div className="group w-full sm:w-[300px] max-w-full mx-auto my-6 bg-black/20 rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out">

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
      <div className="absolute bottom-2 left-2 z-20">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isFavourite}
            onChange={addFavouriteMap}
            className="w-5 h-5"
          />
          <span className="text-white text-sm">Favourite</span>
        </label>
      </div>
      <div className="absolute bottom-2 right-2 z-20">
        <Button className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-2 px-4 rounded shadow-lg cursor-pointer"
          onClick={onClick} name={"Details"} />
      </div>

    </div>
  );
}

export default CardMaps