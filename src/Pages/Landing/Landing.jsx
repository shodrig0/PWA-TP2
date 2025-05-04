import React from 'react'
import { Boxes, Search, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NAVEGACION } from '../../utils/const';
import useHeroes from '../../Hooks/useHeroes';

function Landing() {
  const navigate = useNavigate();
  const {heroes }=useHeroes()

  const goToHome = () => {
    navigate(NAVEGACION.home)
  }
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dxwx1kc4l/video/upload/v1746118766/wbjn4iubkql7apzsjrxg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura para mejorar legibilidad */}
      <div className="absolute inset-0  z-10"></div>

      {/* Contenido central */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center gap-10 text-white text-center md:text-left">
        {/* Texto */}
        <div className="md:w-1/2">
          <h1 className="font-primary text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to OVERFAST
          </h1>
          <p className="text-xl md:text-3xl max-w-xl mb-4 leading-normal">
            Discover all the <strong>heroes</strong>, explore the game's <strong>iconic maps</strong> and access <strong>strategic details</strong> all in one place!
          </p>
          <ul className="text-xl  space-y-4 mb-6">
            <li className='flex'><Boxes className="w-10 h-10 text-yellow-400 mr-5" />Filter by role, game mode or region</li>
            <li className='flex'><Star className="w-10 h-10 text-yellow-400 mr-5" />Save your favourites and access them quickly</li>
            <li className='flex'><Search className="w-10 h-10 text-yellow-400 mr-5" />Find the information you need in seconds</li>
          </ul>

          {/* Botón debajo del texto */}
          <button onClick={goToHome} className=" font-primary min-w-xs bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded">
            HOME
          </button>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/overwatch-logo.png"
            alt="Overwatch Logo"
            className="w-64 md:w-80 lg:w-[28rem] object-contain"
          />
        </div>
      </div>
    </div>


  )
}

export default Landing
