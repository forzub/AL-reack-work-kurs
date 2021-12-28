import React, { useEffect, useState } from 'react';
import './App.css';
import Movies, { normolizeData } from './pages/Movies';
import DetalMovies from './pages/DetalMovies';
import Counter from './pages/Counter';
import InputRange from './pages/InputRange';
import Header from './componets/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DB from './pages/DB';


function App() {

  // const [movies, setMovies] = useState([]);
  const movies = useSelector(state => state.ReducerMovies.items);
  const dispatch = useDispatch();

 
  const ReadFromURL = () => {
    const url = 'http://api.tvmaze.com/shows';
    
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        dispatch( { type : 'movies/get_films_list', items : [...data] } );
      });
  }


  useEffect(ReadFromURL, []);



  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/input-range' />} />
          <Route path='/movies' element={<Movies movies={normolizeData(movies)} />} />
          <Route path='/movies/:id' element={<DetalMovies movies={movies} />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/input-range' element={<InputRange />} />
          <Route path='/db' element={<DB />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
