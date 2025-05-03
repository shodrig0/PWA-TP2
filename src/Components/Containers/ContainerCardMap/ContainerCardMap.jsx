import React from 'react'
import CardMap from '../../cardMap/CardMap'

function ContainerCardMap({ maps }) {
  return (
    <div className="min-h-screen bg-black px-4 sm:px-8 py-6 flex justify-center">
      <div
        className="w-[80%] grid gap-6"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
      >
        {maps.map((map) => (
          <CardMap
            key={map.id}
            name={map.name || "Mapa sin nombre"}
            // screenshot={map.screenshot || "/default-map.jpg"} // ✅ nombre del campo correcto según tu componente
            // gamemodes={map.gamemodes}   // ✅ se pasa el array de modos de juego
          />
        ))}
      </div>
    </div>
  )
}

export default ContainerCardMap
