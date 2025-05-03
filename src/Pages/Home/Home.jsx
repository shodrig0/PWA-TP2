import useHeroes from "../../Hooks/useHeroes";
import Header from "../../Components/Header/Header"
import ContainerCardHero from "../../Components/Containers/ContainerCardHero/ContainerCardHero"
import ContainerCardMap from "../../Components/Containers/ContainerCardMap/ContainerCardMap"
import BannerHome from "../../Components/bannerHome/bannerHome";
import BtnPaginado from "../../Components/btnPaginado/BtnPaginado";
import { usePagination } from "../../context/Pagination";
import Footer from "../../Components/footer/Footer";
import FiltersAndOrder from "../../Components/filtersAndOrder/filtersAndOrder";

function Home() {
  const { heroes } = useHeroes();
  const { currentPage } = usePagination();
  const heroesPorPagina = 8;

  // Cálculo de índices
  const indexUltimoHeroe = currentPage * heroesPorPagina;
  const indexPrimerHeroe = indexUltimoHeroe - heroesPorPagina;
  const heroesActuales = heroes.slice(indexPrimerHeroe, indexUltimoHeroe);
  return (
    <div className="grid place-items-center bg-black">
      <Header />
      <BannerHome />
      <FiltersAndOrder/>
      <ContainerCardHero heroes={heroesActuales} />
      {/* <ContainerCardMap /> */}
      <BtnPaginado elementosPorPagina={heroesPorPagina} />
      <Footer/>
    </div>
  )
}

export default Home
