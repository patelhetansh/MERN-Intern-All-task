import React from 'react'
import { Link } from 'react-router-dom';

export const Netflixmovies = () => {

   var movies = [
      { movieId: 1, movieName: "Kill" },
      { movieId: 2, movieName: "Breking Bad" },
      { movieId: 3, movieName: "Game Of Thrones" },
   ];

   return (
      <div style={{ textAlign: 'center' }}>
         <h1>Netflixmovies</h1>
         {
            movies.map((movie)=>{
               return <Link to={`/Watch/${movie.movieName}`}><li>{movie.movieName}</li></Link>
            })
         }
      </div>
   )
}
