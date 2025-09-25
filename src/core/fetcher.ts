import type { MovieDetails } from "./coreType";

const url = 'https://api.themoviedb.org/3/movie/11';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTYzNWFjODFiOGFjNTdmMjNkZTVhM2QzMGI2YWFhZCIsIm5iZiI6MTc1ODU0MDg4MS43MzIsInN1YiI6IjY4ZDEzNDUxMjdjMjM2ZjNjMWNkN2E0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RsVOWDF90U1uMovqn2CdeYaLNxaqe5W2ZJ7wbYYC9M'
  }
};

export async function fetcherMovieDetails(id:number){

    const result = await fetch(url, options); 
    const data:MovieDetails = await result.json(); 
    return data;
}