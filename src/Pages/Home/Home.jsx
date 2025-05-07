import { useState, useEffect } from "react";
import { usePagination } from "../../Contexto/Pagination"
import useHeroes from "../../Hooks/useHeroes";
import useMaps from "../../Hooks/useMaps";
import usePageTitle from "../../Hooks/usePageTitle";
import Header from "../../Components/Header/Header";
import ContainerCardHero from "../../Components/Containers/ContainerCardHero/ContainerCardHero";
import ContainerCardMap from "../../Components/Containers/ContainerCardMap/ContainerCardMap";
import BannerHome from "../../Components/Banner/BannerHome";
import BtnPaginado from "../../Components/BtnPag/BtnPaginado";
import Footer from "../../Components/Footerr/Footer";
import FilterContainer from "../../Components/Containers/FilterContainer/FilterContainer";

import { useTranslation } from 'react-i18next'


function Home() {
  const { t, i18n } = useTranslation();

  usePageTitle()

  const { heroes, loading, orderAlphabetically, onRoleChangeHandle } = useHeroes();
  const { maps, filterByGameMode, orderMapsAlphabetically } = useMaps();

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

  const handleMapModeChange = (value) => {
    filterByGameMode(value); 
  }
  
  const handleMapOrderChange = (value) => {
    orderMapsAlphabetically(value);
  };
  console.log(maps) 
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

      <div className="flex w-full justify-center gap-4 py-4 relative z-10" style={{ backgroundColor: '#001922' }}>
 
        <button
          className={`px-4 cursor-pointer py-2 rounded z-20 ${isHeroe ? "bg-yellow-500" : "bg-gray-600"}`}
          onClick={() => setIsHeroe(true)}
        >
           {t("heroes")}
        </button>
        <button
          className={`px-4 cursor-pointer py-2 rounded z-20 ${!isHeroe ? "bg-yellow-500" : "bg-gray-600"}`}
          onClick={() => setIsHeroe(false)}
        >
          {t("maps")}
        </button>
        <img
    src="/top_diver.png"
    alt="TopDiviver"
    className="absolute w-full -top-6 left-1/2 -translate-x-1/2   object-contain"
  />
      </div>

      {isHeroe ? (
        < >
         <FilterContainer
        onOrderChange={orderAlphabetically}
        onRoleChange={onRoleChangeHandle}
        isHeroe={isHeroe}
        />
          {loading ? (
            <div className="flex justify-center items-center min-h-screen">
              <img src="/spinerOverwatch.gif" alt="Loading..."  className="h-100 w-100"/>
              
            </div>
          ) : (
            <ContainerCardHero heroes={heroesActuales} />
          )}

        </>
      ) : (
        <>
          <FilterContainer
          onGameModeChange={handleMapModeChange}
          onOrderChange={handleMapOrderChange}
          isHeroe={isHeroe}
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
