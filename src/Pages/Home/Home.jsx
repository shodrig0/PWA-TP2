import React from 'react'
import {useNavigate} from "react-router-dom"
import {NAVEGACION} from "../../utils/const"

function Home() {
const navigate = useNavigate();
const irDetalles=()=>{
    navigate(NAVEGACION.details)
}
  return (
    <div>
      <button onClick={irDetalles}>vamos detalles</button>
    </div>
  )
}

export default Home
