import React from 'react';
import { NavLink } from 'react-router-dom';

function Infobar({ movieId }) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Infobar;
