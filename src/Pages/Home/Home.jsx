import React from 'react'
import {useNavigate} from "react-router-dom"
import {NAVEGACION} from "../../utils/const"
import ContainerCardHeroe from '../../Components/containerCardHeroe';

function Home() {
const navigate = useNavigate();
const irDetalles=()=>{
    navigate(NAVEGACION.details)
}
  return (
    <div>
      <button onClick={irDetalles}>vamos detalles</button>
      <ContainerCardHeroe/>
    </div>
  )
}

export default Home
