import React from 'react'
import CardMap from '../../MapCard/CardMaps'
import useMaps from '../../../Hooks/useMaps'

function ContainerCardMap({ maps }) {

  const { handleMapClick, mapFavourites, addFavouriteMap } = useMaps()

  return (
    <div className="w-full flex justify-center pt-15">
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6 
          w-full
          md:w-[90%] 
          max-w-7xl
        "
      >
        {maps.map((mapa) => (
          <CardMap
            key={mapa.name}
            name={mapa.name}
            screenshot={mapa.screenshot}
            gamemodes={mapa.gamemodes}
            location={mapa.location}
            onClick={() => handleMapClick(mapa.name)}
            isFavourite={mapFavourites.includes(mapa.name)}
            addFavouriteMap={() => addFavouriteMap(mapa.name)}
          />
        ))}
      </div>
    </div>
  )
}

export default ContainerCardMap
