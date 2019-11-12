import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { NavLink } from "react-router-dom";


const navLinkStyle ={textDecoration:"none", color:"black"};

const MovieList = props => {
  const [movies, setMovies] = useState([])
  console.log(movies);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <NavLink to={`/movies/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
        </NavLink>
      ))}
    </div>
  );
}

function MovieDetails({ movie, movie:{id} }) {

  return (
    <NavLink style={navLinkStyle} to={`/movies/${id}`}>
    <MovieCard {...movie} />
    </NavLink>

  );
}

export default MovieList;
