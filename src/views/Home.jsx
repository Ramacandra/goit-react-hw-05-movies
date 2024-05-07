import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovies } from 'utils/fetch-api';

function Home() {
  const [moviesArray, setMoviesArray] = useState([]);
  useEffect(() => {
    fetchMovies()
      .then(data => setMoviesArray(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <section>
        <h2 className="title--main">Trending Movies List</h2>
        <ul>
          {moviesArray.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
