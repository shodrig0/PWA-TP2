import React, { useState } from "react";
import useMaps from '../../Hooks/useMaps'
import CardMap from '../../Components/cardMap/CardMap'
 import Header from '../../Components/Header/Header'

function MapsPage() {
  const { maps } = useMaps();
  const [visibleCount, setVisibleCount] = useState(9); // 👈 Empieza con 8 mapas

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 9); // Cargar 8 más
  };

  return (
   <div> <Header></Header>

    <div className="min-h-screen bg-black px-4 sm:px-8 py-6 flex flex-col items-center">
      <h1 className="text-white text-3xl font-bold mb-6">Mapas</h1>
      
      <div className="w-[80%] grid gap-6"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {maps.slice(0, visibleCount).map((mapa) => (
          <CardMap
            key={mapa.name}
            name={mapa.name}
            screenshot={mapa.screenshot}
            gamemodes={mapa.gamemodes}
            location={mapa.location}
          />
        ))}
      </div>

      {visibleCount < maps.length && ( // Si hay más mapas, mostrar botón
        <button
          onClick={handleLoadMore}
          className="mt-6 px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
        >
          Cargar más
        </button>
      )}
    </div>
      </div>

  );
}

export default MapsPage;

