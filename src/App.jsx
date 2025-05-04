// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PaginationProvider } from './context/Pagination';
import { NAVEGACION } from "./utils/const"
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Landing from './Pages/Landing/Landing';
import PageNotFound from './Pages/Error/404';
import PageValidationError from './Pages/Error/422';
<<<<<<< HEAD
import MapsPage from './Pages/Maps/MapsPage'; // lista de mapas
// import MapDetail from './Pages/Maps/MapDetail'; // detalle de mapa

=======
import AboutUs from './Components/AboutUs/AboutUs';
>>>>>>> main
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
<<<<<<< HEAD
    <PaginationProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Landing />} path={NAVEGACION.landing} />
        <Route element={<Home />} path={NAVEGACION.home} />
        <Route element={<Details />} path={NAVEGACION.details} />
        <Route element={<MapsPage />} path={NAVEGACION.maps} />
        {/* <Route element={<MapDetail />} path={NAVEGACION.mapDetail} /> */}
        <Route element={<PageNotFound />} path={NAVEGACION.pageNotFound} />
        <Route element={<PageValidationError />} path={NAVEGACION.detailsBase} />
      </Routes>
    </BrowserRouter>
=======
    <PaginationProvider className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path={NAVEGACION.landing} />
          <Route element={<Home />} path={NAVEGACION.home} />
          <Route element={<Details />} path={NAVEGACION.details} />
          <Route element={<PageNotFound />} path={NAVEGACION.pageNotFound} />
          <Route element={<PageValidationError />} path={NAVEGACION.detailsBase} />
          <Route element={<AboutUs />} path={NAVEGACION.aboutUs} />
        </Routes>
      </BrowserRouter>
>>>>>>> main
    </PaginationProvider>
  )
}

export default App
