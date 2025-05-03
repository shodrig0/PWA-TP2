import React from 'react'
import CardMap from '../../cardMaps/CardMaps'
import useMaps from '../../../Hooks/useMaps'

function ContainerCardMap() {

  const { maps } = useMaps()

  return (
    <div>
      <div className="w-[80%] grid gap-6"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {maps.map((mapa) => (
          <CardMap
            key={mapa.name}
            name={mapa.name}
            screenshot={mapa.screenshot}
            gamemodes={mapa.gamemodes}
            location={mapa.location}
          />
        ))}
      </div>
    </div>
  )
}


export default ContainerCardMap
