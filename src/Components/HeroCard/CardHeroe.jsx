import React from 'react'

function CardHeroe({ name, portrait, role, onClick }) {

  // let bgCard = "";
  // if (role == "tank") {
  //   bgCard = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Via2t5ZTlrcHFvbng4dW51cG55ZWZjNndiY2wydWp3bHM4d3Z3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cMhglZMLwT8e1jYkfC/giphy.gif"
  // } else if (role == "damage") {
  //   bgCard = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN20zejM1c2xzczNseWo4bWNkYmw5N3p6cmN0bGtyZzhqY3U1Zm85NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NLwQZlo5wA8su4kYhL/giphy.gif"
  // } else if (role == "support") {
  //   bgCard = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjZhNWE4MnBsZ2t1NmpkYWFhaHozOTgwaTdvYjgybnJmNmE3NnVwOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GOFp6uulTA5MzD7hJq/giphy.gif"
  // }
  let iconRol = {
    tank: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/bltf0889daa1ef606db/6504cff74d2a764cb7973991/Tank.svg?format=webply&quality=90",
    damage: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt05d482c88096959a/6504cff7d9caa1285f64b6bd/Damage.svg?format=webply&quality=90",
    support: "https://blz-contentstack-images.akamaized.net/v3/assets/blt2477dcaf4ebd440c/blt3ccd5df488163b33/6504cff7fc2ae4d7c50445c4/Support.svg?format=webply&quality=90"
  }
  return (
    <div
      className="relative group w-full sm:w-[300px] max-w-full mx-auto my-6 m-auto  h-[450px] md:w-[200px] md:h-[280px] overflow-hidden rounded-xl md:mx-5 shadow-lg  cursor-pointer"
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
          src={iconRol[role]}
          alt="role"
          className="absolute bottom-12.25 left-12 md:left-8.5 md:bottom-8.5  w-10 h-10  md:w-6 md:h-6  opacity-75 z-20"
        />
        <div className=" h-21 md:h-28 px-6 py-5 pr-10 relative z-10"></div>
      </div>
    </div>
  )
}

export default CardHeroe
