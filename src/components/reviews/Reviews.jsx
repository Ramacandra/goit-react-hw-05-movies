import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/fetch-api';

export function Reviews() {
  const movieId = useParams().movieId;
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(cast => setReviews(cast))
      .catch(error => console.error(error));
  }, [movieId]);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.author}>
              <p>{review.author} says:</p>
              <p>"{review.content}"</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>There's no reviews yet</h3>
      )}
    </div>
  );
}
