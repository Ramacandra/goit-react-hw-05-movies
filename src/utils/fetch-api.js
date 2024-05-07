const URL_API =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const URL_MOVIE_BASE = 'https://api.themoviedb.org/3/movie';
const URL_MOVIE_QUERIES_BASE = 'https://api.themoviedb.org/3/search/movie';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzQ4ODM0NTRiZTdhNDJkODgwZWNkNDU1ZjgzYjIxYSIsInN1YiI6IjY1ZGQ1MjgyOTAzYzUyMDE3Y2JiOTVjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Z-bN0gGfdmKFEQdkBf_3L-z6zQet7OI_BQnXMIuDrA',
  },
};
export const fetchMovies = async () => {
  let data = [];
  try {
    const response = await fetch(URL_API, OPTIONS);
    data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return data;
  }
};
export const fetchMoviesById = async movieId => {
  try {
    const response = await fetch(URL_MOVIE_BASE + '/' + movieId, OPTIONS);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieByQuery = async query => {
  try {
    const response = await fetch(
      URL_MOVIE_QUERIES_BASE +
        `?query=${query}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await fetch(
      URL_MOVIE_BASE + `/${movieId}/credits`,
      OPTIONS
    );
    const data = await response.json();
    const cast = data.cast.map(character => {
      return {
        id: character.id,
        character: character.character,
        actor: character.name,
        photo_url: character.profile_path,
      };
    });
    return cast;
  } catch (error) {
    return [];
  }
};

export async function fetchMovieReviews(movieId) {
  try {
    const response = await fetch(
      URL_MOVIE_BASE + `/${movieId}/reviews`,
      OPTIONS
    );
    const data = await response.json();
    const reviews = data.results.map(review => {
      return {
        author: review.author,
        content: review.content,
      };
    });
    return reviews;
  } catch (error) {
    console.log(error);
    return [];
  }
}
