import React from 'react'
import { iconRol } from '../../../public/js/logoRol'

function CardHeroe({ name, portrait, role, onClick }) {

 const iconRole = iconRol[role]
 
  return (
    <div
      className="relative group  sm:w-[300px]  mx-auto my-6 m-auto  h-[405px] md:w-[200px] md:h-[280px] overflow-hidden rounded-xl md:mx-5 shadow-lg  cursor-pointer"
      onClick={onClick}
    >

      <div className="relative w-[300px] md:w-[200px] md:h-[256px] overflow-hidden rounded-xl mx-auto shadow-lg my-5">
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-50 z-0  bg-black/20 rounded-xl overflow-hidden shadow-md border border-white/10 hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out"
          // style={{ backgroundImage: `url("${bgCard}")` }}
        ></div>
        <div className="flex justify-center items-center aspect-square  relative  bg-white/0">
          <img
            src={portrait}
            alt="portrait"
            className="object-cover w-full h-full z-10 transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 ">
          <img
            src="fondoPieCard.png"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>


        <h3 className="absolute font-primary top-1/2 right-7 transform -translate-y-1/2 rotate-90 origin-right uppercase text-white font-semibold z-20 text-2xl md:text-sm bg-black/30 px-4 py-1 rounded-xl whitespace-nowrap ">
          {name}
        </h3>


        <h3 className="absolute bottom-13.5 left-32 md:bottom-9  md:left-21 font-primary uppercase text-white font-semibold z-20 text-xm md:text-xs">{role}</h3>
        <img
          src={iconRole}
          alt="role"
          className="absolute bottom-12.25 left-12 md:left-8.5 md:bottom-8.5  w-10 h-10  md:w-6 md:h-6  opacity-75 z-20"
        />
        <div className=" h-21 md:h-28 px-6 py-5 pr-10 relative z-10"></div>
      </div>
    </div>
  )
}

export default CardHeroe
