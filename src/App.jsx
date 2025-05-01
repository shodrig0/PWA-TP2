// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NAVEGACION } from "./utils/const"
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Landing from './Pages/Landing/Landing';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={NAVEGACION.home} />
        <Route element={<Details />} path={NAVEGACION.details} />
        <Route element={<Landing />} path={NAVEGACION.landing} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
