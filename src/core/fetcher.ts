import type { MovieDetails, MovieGenre, MovieGenreList } from "./coreType";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTYzNWFjODFiOGFjNTdmMjNkZTVhM2QzMGI2YWFhZCIsIm5iZiI6MTc1ODU0MDg4MS43MzIsInN1YiI6IjY4ZDEzNDUxMjdjMjM2ZjNjMWNkN2E0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RsVOWDF90U1uMovqn2CdeYaLNxaqe5W2ZJ7wbYYC9M'
  }
}

/** Genre fetcher */

export async function fetcherGenresList(){
  const url = 'https://api.themoviedb.org/3/genre/movie/list';

  const result = await fetch(url, options);
  const data: MovieGenreList = await result.json();
  return data.genres;
}

export async function fetcherGenre(id: number){
  const url = '';

  const result = await fetch(url, options);
  const data: MovieGenre = await result.json();
  return data;
}

/** Movie fetcher */

export async function fetcherMovieDetails(id: number) {

  const url = `https://api.themoviedb.org/3/movie/${id}`;

  const result = await fetch(url, options);
  const data: MovieDetails = await result.json();
  return data;
}

export async function fetcherMovies() {

  const url = 'https://api.themoviedb.org/3/genre/movie/list';

  const result = await fetch(url, options);
  const data:MovieGenre[] = await result.json();
  return data;
}