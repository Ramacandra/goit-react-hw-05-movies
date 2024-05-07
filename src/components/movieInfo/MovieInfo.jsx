import React from 'react';
import './movieinfo.css';
import { NavLink } from 'react-router-dom';

const POSTER_BASE = 'https://image.tmdb.org/t/p/w500';

function MovieInfo({ movieObject, genres }) {
  return (
    <div>
      <section className="movie-data">
        <div className="title">
          <NavLink to={'/'}>
            <button className="btn btn-primary">Go back...</button>
          </NavLink>
        </div>
        <div className="content">
          <div className="img-container">
            <img
              src={POSTER_BASE + movieObject.poster_path}
              alt={movieObject.title}
              width="350px"
            />
          </div>
          <div className="movie-info">
            <ul className="ul">
              <li>
                <h2>{movieObject.title}</h2>
              </li>
              <li>
                <p>
                  User Score:{' '}
                  <span>
                    {Math.ceil(movieObject.vote_average * 10).toString()}
                  </span>
                  %
                </p>
              </li>
              <li>
                <p>Overview:</p>
                <p>{movieObject.overview}</p>
              </li>
              <li>
                <p>Genres:</p>
                <p>{genres}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MovieInfo;
