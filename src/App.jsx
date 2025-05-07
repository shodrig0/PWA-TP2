// import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PaginationProvider } from './Contexto/Pagination';
import { NAVEGACION } from "./Const/const"
import Home from './Pages/Home/Home';
import Details from './Pages/Details/Details';
import Landing from './Pages/Landing/Landing';
import PageNotFound from './Pages/Error/404';
import PageValidationError from './Pages/Error/422';
import AboutUs from './Pages/AboutUs/AboutUs';
import Favourites from './Pages/Favourites/Favourites';
import './App.css'

const App = () => {

  return (
    <PaginationProvider >
      <BrowserRouter>
        <Routes>
          <Route element={<Landing />} path={NAVEGACION.landing} />
          <Route element={<Home />} path={NAVEGACION.home} />
          <Route element={<Details />} path={NAVEGACION.heroDetails} />
          <Route element={<Details />} path={NAVEGACION.mapDetails} />
          <Route element={<PageNotFound />} path={NAVEGACION.pageNotFound} />
          <Route element={<PageValidationError />} path={NAVEGACION.details} />
          <Route element={<Favourites />} path={NAVEGACION.favourites} />
          <Route element={<AboutUs />} path={NAVEGACION.aboutUs} />
        </Routes>
      </BrowserRouter>
    </PaginationProvider>
  )
}

export default App
