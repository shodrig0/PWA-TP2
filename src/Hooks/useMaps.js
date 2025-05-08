import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NAVEGACION } from "../Const/const";

function useMaps() {
  const [maps, setMaps] = useState([]);
  const [mapOrder, setMapOrder] = useState("asc");
  const [mapMode, setMapMode] = useState("all");
  const [filteredMaps, setFilteredMaps] = useState([]);

  const [mapFavourites, setMapFavourites] = useState(() => {
    const storedMFavourites = localStorage.getItem("mapFavourites");
    return storedMFavourites ? JSON.parse(storedMFavourites) : [];
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMaps() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/maps`);
        if (!response.ok) {
          throw new Error("Error al obtener los mapas");
        }
        const data = await response.json();
        setMaps(data);
      } catch (error) {
        console.error("Error al obtener los mapas:", error);
      }
    }

    fetchMaps();
  }, []);

  useEffect(() => {
    localStorage.setItem("mapFavourites", JSON.stringify(mapFavourites));
  }, [mapFavourites]);

  useEffect(() => {
    let updatedMaps = [...maps];

    if (mapMode !== "all") {
      updatedMaps = updatedMaps.filter((map) =>
        map.gamemodes?.includes(mapMode)
      )
    }

    updatedMaps.sort((a, b) => {
      if (mapOrder === "asc") return a.name.localeCompare(b.name)
      return b.name.localeCompare(a.name)
    });

    setFilteredMaps(updatedMaps);
  }, [maps, mapMode, mapOrder]);

  const getMapByName = useCallback(
    (name) => {
      if (!name) {
        console.warn("getMapByName: El parámetro 'name' está vacío o es undefined");
        return null;
      }

      const foundMap = maps.find(
        (map) => map.name.toLowerCase() === name.toLowerCase().trim()
      );

      if (!foundMap) {
        console.warn(`No se encontró un mapa con el nombre '${name}'`);
      }

      return foundMap || null;
    },
    [maps]
  );

  const addFavouriteMap = (mapId) => {
    setMapFavourites((mFavourite) => {
      const updatedFavouriteM = mFavourite.includes(mapId)
        ? mFavourite.filter((key) => key !== mapId)
        : [...mFavourite, mapId];
      console.log("Mapas actualizados:", updatedFavouriteM);
      return updatedFavouriteM;
    });
  };

  const favMaps = maps.filter((map) => mapFavourites.includes(map.name));

  const handleMapClick = (mapId) => {
    const url = NAVEGACION.mapDetails.replace(":name", mapId);
    navigate(url);
  };

  const filterByGameMode = (mode) => {
    setMapMode(mode);
  };

  const orderMapsAlphabetically = (order) => {
    setMapOrder(order);
  };

  return {
    maps: filteredMaps,
    getMapByName,
    handleMapClick,
    mapFavourites,
    addFavouriteMap,
    orderMapsAlphabetically,
    filterByGameMode,
    favMaps,
  };
}

export default useMaps;
