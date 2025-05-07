import { useState, useEffect } from "react";
import { usePagination } from "../../Contexto/Pagination"
import useHeroes from "../../Hooks/useHeroes";
import useMaps from "../../Hooks/useMaps";
import Header from "../../Components/Header/Header";
import ContainerCardHero from "../../Components/Containers/ContainerCardHero/ContainerCardHero";
import ContainerCardMap from "../../Components/Containers/ContainerCardMap/ContainerCardMap";
import BannerHome from "../../Components/Banner/BannerHome";
import BtnPaginado from "../../Components/BtnPag/BtnPaginado";
import Footer from "../../Components/Footerr/Footer";
import FilterContainer from "../../Components/Containers/FilterContainer/FilterContainer";

function Home() {
  const { heroes, loading, orderAlphabetically, onRoleChangeHandle } = useHeroes();
  const { maps } = useMaps();
  const { currentPage, setCurrentPage } = usePagination();


  const [isHeroe, setIsHeroe] = useState(true);
  const elementosPorPagina = 8;

  const indexUltimoItem = currentPage * elementosPorPagina;
  const indexPrimerItem = indexUltimoItem - elementosPorPagina;

  const heroesActuales = heroes.slice(indexPrimerItem, indexUltimoItem);
  const mapsActuales = maps.slice(indexPrimerItem, indexUltimoItem);
  useEffect(() => {
    setCurrentPage(1);
  }, [heroes, maps]);
  return (
    <div
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url('https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt912826400bb9b504/6308459c47fdc2115dced822/cloud-2600.jpg?format=webply&quality=90')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <Header />
      <BannerHome />

      <div className="flex w-full justify-center gap-4 py-4" style={{ backgroundColor: '#111F27' }}>
        <button
          className={`px-4 py-2 rounded ${isHeroe ? "bg-yellow-500" : "bg-gray-600"}`}
          onClick={() => setIsHeroe(true)}
        >
          Heroes
        </button>
        <button
          className={`px-4 py-2 rounded ${!isHeroe ? "bg-yellow-500" : "bg-gray-600"}`}
          onClick={() => setIsHeroe(false)}
        >
          Maps
        </button>
      </div>

      {isHeroe ? (
        < >
          <FilterContainer
            onOrderChange={orderAlphabetically}
            onRoleChange={onRoleChangeHandle}
          />
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
              <img src="/spinerOverwatch.gif" alt="Loading..." />
            </div>
          ) : (
            <ContainerCardHero heroes={heroesActuales} />
          )}

        </>
      ) : (
        <>
          <FilterContainer
          // onOrderChange={orderAlphabetically}
          // onRoleChange={onRoleChangeHandle}
          />
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
              <img src="/spinerOverwatch.gif" alt="Loading..." />
            </div>
          ) : (
            <ContainerCardMap maps={mapsActuales} />
          )}
        </>
      )}
      <BtnPaginado
        elementosPorPagina={elementosPorPagina}
        totalItems={isHeroe ? heroes.length : maps.length}
      />

      <Footer />
    </div>
  );
}

export default Home;
