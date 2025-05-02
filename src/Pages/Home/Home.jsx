import useHeroes from "../../Hooks/useHeroes";
import Header from "../../Components/Header/Header"
import React,{useState} from 'react'
import ContainerCardHeroe from '../../Components/containerCardHeroe';
import ContainerCardMaps from '../../Components/containerCardMaps';
import BannerHome from "../../Components/bannerHome/bannerHome";
import BtnPaginado from "../../Components/btnPaginado/BtnPaginado";
import { usePagination } from "../../context/Pagination";

function Home() {
  const { heroes } = useHeroes();
  const { currentPage} = usePagination();
  const heroesPorPagina = 8;

  // Cálculo de índices
  const indexUltimoHeroe = currentPage * heroesPorPagina;
  const indexPrimerHeroe = indexUltimoHeroe - heroesPorPagina;
  const heroesActuales = heroes.slice(indexPrimerHeroe, indexUltimoHeroe);
  return (
    <div>
      <Header />
      <BannerHome/>
      {/* <button onClick={irDetalles}>vamos detalles</button> */}
      <ContainerCardHeroe  heroes={heroesActuales}/>
      {/* <ContainerCardMaps /> */}
 <BtnPaginado elementosPorPagina={heroesPorPagina} />
    </div>
  )
}

export default Home
