import React from 'react'
import { Boxes, Search, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NAVEGACION } from '../../Const/const';
import useHeroes from '../../Hooks/useHeroes';

function Landing() {
  const navigate = useNavigate();
  const { heroes } = useHeroes();

  const goToHome = () => {
    navigate(NAVEGACION.home);
  };

  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden">
   
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dxwx1kc4l/video/upload/v1746118766/wbjn4iubkql7apzsjrxg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />


      <div className="relative z-20 max-w-6xl px-6  flex flex-col md:flex-row items-center justify-around gap-10 text-white text-left">

        <div className="block md:hidden  justify-center w-full">
          <img
            src="/overwatch-logo.png"
            alt="Overwatch Logo"
            className="w-40 object-contain m-auto mt-10"
          />
        </div>

        <div className="w-full h-full md:h-screen md:flex md:items-center md:justify-center">
          <div className="w-full max-w-xl flex flex-col items-start">
            <h1 className="font-primary md:text-center text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
              Welcome to OVERFAST
            </h1>
            <p className="text-base md:text-lg max-w-xl mb-4 leading-normal">
              Discover all the <strong>heroes</strong>, explore the game's <strong>iconic maps</strong> and access <strong>strategic details</strong> all in one place!
            </p>
            <ul className="text-base md:text-lg space-y-4 mb-6">
              <li className='flex items-center'><Boxes className="w-8 h-8 text-yellow-400 mr-3" />Filter by role, game mode or region</li>
              <li className='flex items-center'><Star className="w-8 h-8 text-yellow-400 mr-3" />Save your favourites and access them quickly</li>
              <li className='flex items-center'><Search className="w-8 h-8 text-yellow-400 mr-3" />Find the information you need in seconds</li>
            </ul>

         
            <div className="w-full flex sm:justify-center xl:justify-start">
              <button
                onClick={goToHome}
                className="font-primary w-full md:w-full xl:w-[200px] bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded"
              >
                HOME
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 justify-end">
          <img
            src="/overwatch-logo.png"
            alt="Overwatch Logo"
            className="w-60 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
