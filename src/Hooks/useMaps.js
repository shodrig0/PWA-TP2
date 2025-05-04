import { useState, useEffect } from "react";

function useMaps() {
<<<<<<< HEAD
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    async function fetchMaps() {
      try {
        const response = await fetch("https://overfast-api.tekrop.fr/maps");

        if (!response.ok) {
          throw new Error("Error al obtener los mapas");
        }

        const data = await response.json(); // convertir la respuesta a JSON
        setMaps(data); // guardar en el estado
      } catch (error) {
        console.error("Error al obtener los mapas:", error);
      }
    }

    fetchMaps();
  }, []);

  return { maps };
}

export default useMaps;
=======
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        async function fetchMaps() {
            try {
                const response = await fetch(`/api/maps`);

                if (!response.ok) {
                    throw new Error("Error al obtener los mapas");
                }

                const data = await response.json(); // convertir la respuesta a JSON
                setMaps(data); // guardar en el estado
            } catch (error) {
                console.error("Error al obtener los mapas:", error);
            }
        }

        fetchMaps();
    }, []);

    return { maps };
}

export default useMaps;
>>>>>>> main
