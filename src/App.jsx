// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NAVEGACION } from "./utils/const"
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Landing from './Pages/Landing/Landing';
import PageNotFound from './Pages/Error/404';
import PageValidationError from './Pages/Error/422';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path={NAVEGACION.landing} />
        <Route element={<Home />} path={NAVEGACION.home} />
        <Route element={<Details />} path={NAVEGACION.details} />
        <Route element={<PageNotFound />} path={NAVEGACION.pageNotFound} />
        <Route element={<PageValidationError />} path={NAVEGACION.detailsBase} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
