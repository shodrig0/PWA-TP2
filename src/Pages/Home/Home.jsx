import React from 'react'
import {useNavigate} from "react-router-dom"
import {NAVEGACION} from "../../utils/const"
import ContainerCardHeroe from '../../Components/containerCardHeroe';
import ContainerCardMaps from '../../Components/containerCardMaps';

function Home() {
const navigate = useNavigate();
const irDetalles=()=>{
    navigate(NAVEGACION.details)
}
  return (
    <div>
      <button onClick={irDetalles}>vamos detalles</button>
      <ContainerCardHeroe/>
      {/* <ContainerCardMaps/> */}
    </div>
  )
}

export default Home
