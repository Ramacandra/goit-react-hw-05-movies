import Search from 'components/search/Search';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovieByQuery } from 'utils/fetch-api';
import { manageQuery } from 'utils/manageQuery';

function Movie() {
  const [moviesArray, setMoviesArray] = useState([]);
  const [moviesArrayVisible, setMoviesArrayVisible] = useState(false);

  const handleQuery = async event => {
    event.preventDefault();
    const query = manageQuery(event.target.query.value);
    const movies = await fetchMovieByQuery(query);
    setMoviesArray(movies);
    setMoviesArrayVisible(!moviesArrayVisible);
  };

  return (
    <div>
      <h2 className="title--main">Search Movie</h2>
      <Search query={handleQuery}></Search>

      {setMoviesArrayVisible && (
        <ul>
          {moviesArray.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Movie;
