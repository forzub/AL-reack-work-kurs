import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RangeToInput from './componets/RangeToInput';
import Authorization from './componets/Authorization';
import FilmsList from './componets/FilmsList';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from "./componets/Header";
import ProductsDetails from './pages/ProductsDetails';

function App() {
  return (
        <Fragment>
          {/* <RangeToInput />
          <Authorization /> */}
          {/* <FilmsList /> */}
          
          <Header />
          

          <Routes>
            <Route path='/'  element={<Navigate to='/home' />} />
            <Route path='/home'  element={<Home />} />
            <Route path='/products'  element={<Products />} />
            <Route path='/products/:productID'  element={<ProductsDetails />} />
          </Routes>  
        </Fragment>
  );
}

export default App;
