import { useNavigate } from "react-router-dom"
import { NAVEGACION } from "../../utils/const"
import useHeroes from "../../Hooks/useHeroes"
import React from 'react'
import ContainerCardHeroe from '../../Components/containerCardHeroe';
import ContainerCardMaps from '../../Components/containerCardMaps';
import Landing from "../Landing/Landing";

function Home() {
  const { heroes } = useHeroes()
  const navigate = useNavigate()
  const irDetalles = () => {
    navigate(NAVEGACION.details)
  }
  return (
    <div>
      <button onClick={irDetalles}>vamos detalles</button>
      <ContainerCardHeroe/>
      <ContainerCardMaps/>
      <Landing/>

    </div>
  )
}

export default Home
