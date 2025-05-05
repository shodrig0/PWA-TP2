// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PaginationProvider } from './context/Pagination';
import { NAVEGACION } from "./utils/const"
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Landing from './Pages/Landing/Landing';
import PageNotFound from './Pages/Error/404';
import PageValidationError from './Pages/Error/422';
import AboutUs from './Components/AboutUs/AboutUs';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <PaginationProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path={NAVEGACION.landing} />
          <Route element={<Home />} path={NAVEGACION.home} />
          <Route path={NAVEGACION.heroDetails} element={<Details />} />
          <Route path={NAVEGACION.mapDetails} element={<Details />} />
          <Route element={<PageNotFound />} path={NAVEGACION.pageNotFound} />
          <Route element={<PageValidationError />} path={NAVEGACION.details} />
          <Route element={<AboutUs />} path={NAVEGACION.aboutUs} />
        </Routes>
      </BrowserRouter>
    </PaginationProvider>
  )
}

export default App
