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
      <div className="m-auto flex gap-2 mt-4">
        <button
          onClick={() => cambiarPagina(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 disabled:opacity-40"
        >
         <img src="btnPaginadoSiguiente.png" alt="" className="h-10 hover:brightness-155 -scale-x-100 " />
        </button>
        {Array.from({ length: totalPaginas }, (_, i) => (
        <button
        key={i}
        onClick={() => cambiarPagina(i + 1)}
        className={`relative group px-3 py-1 rounded focus:outline-none`}
      >
        <img 
          src="btnNumberPagination.png" 
          alt="" 
          className="h-10 transition-transform duration-200 group-hover:scale-105 group-focus:scale-105 hover:brightness-155"
        />
        <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm z-10 pointer-events-none">
          {i + 1}
        </p>
      </button>
      
        ))}
        <button
          onClick={() => cambiarPagina(currentPage + 1)}
          disabled={currentPage === totalPaginas}
          className="px-3 py-1 disabled:opacity-40 "
        >
        <img src="btnPaginadoSiguiente.png" alt="" 
        className='h-10 hover:brightness-155 '/>
        </button>
    </div>
  )
}

export default BtnPaginado
