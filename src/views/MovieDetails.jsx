import Infobar from 'components/infobar/Infobar';
import MovieInfo from 'components/movieInfo/MovieInfo';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMoviesById } from 'utils/fetch-api';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const [genre, setGenre] = useState('');
  useEffect(() => {
    fetchMoviesById(movieId)
      .then(movie => {
        setMovieData(movie);
        getGenre(movie.genres);
      })
      .catch(error => console.error(error));
  }, [movieId]);

  const getGenre = genreArray => {
    let genres = '';
    genreArray.map(genre => (genres += genre.name + '. '));
    setGenre(genres);
  };
  return (
    <div>
      <MovieInfo movieObject={movieData} genres={genre}></MovieInfo>
      <hr />
      <Infobar movieId={movieId}></Infobar>
      <hr />
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
}

export default MovieDetails;
