import React from 'react'
import useHeroes from '../../Hooks/useHeroes'
import { usePagination } from '../../context/Pagination';

function BtnPaginado({elementosPorPagina}) {
const {heroes }=useHeroes();
 const { currentPage, setCurrentPage } = usePagination();



    const totalPaginas = Math.ceil(heroes.length / elementosPorPagina);

    const cambiarPagina = (nuevaPagina) => {
      if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
        setCurrentPage(nuevaPagina);
      }
    };
  return (
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => cambiarPagina(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Anterior
        </button>
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => cambiarPagina(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1
                ? 'bg-white text-black font-bold'
                : 'bg-gray-700 text-white'
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => cambiarPagina(currentPage + 1)}
          disabled={currentPage === totalPaginas}
          className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-40"
        >
          Siguiente
        </button>
    </div>
  )
}

export default BtnPaginado
