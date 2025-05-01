// import useHeroes from "../../Hooks/
import Header from "../../Components/Header/Header"
import React from 'react'
import ContainerCardHeroe from '../../Components/containerCardHeroe';
import ContainerCardMaps from '../../Components/containerCardMaps';

function Home() {
  // const { heroes } = useHeroes()

  return (
    <div>
      <Header />
      {/* <button onClick={irDetalles}>vamos detalles</button> */}
      <ContainerCardHeroe />
      <ContainerCardMaps />

    </div>
  )
}

export default Home
