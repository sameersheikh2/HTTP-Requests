import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesData, setMoviesData] = useState([])


  const fetchMoviesHandler = () =>{
    fetch('https://swapi.dev/api/films').then(response=>{
      return response.json();
    }).then((data)=>{
      console.log(data)
      setMoviesData(data.results)
    })
  }
  console.log(moviesData)

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesData} />
      </section>
    </React.Fragment>
  );
}

export default App;
