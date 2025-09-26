import type { MovieGenre, PopularMovieDetail, MovieGenreList } from "../core/coreType"

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTYzNWFjODFiOGFjNTdmMjNkZTVhM2QzMGI2YWFhZCIsIm5iZiI6MTc1ODU0MDg4MS43MzIsInN1YiI6IjY4ZDEzNDUxMjdjMjM2ZjNjMWNkN2E0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2RsVOWDF90U1uMovqn2CdeYaLNxaqe5W2ZJ7wbYYC9M'
    }
}

export function getPopularMovieGenres(idList: number[], genreList:MovieGenre[]){

    const movieGenre:string[] = []

    idList.forEach((genreId) => {
        const foundGenre = genreList.find((genre) => genre.id == genreId)
        if (foundGenre){
            movieGenre.push(foundGenre.name);
        }
    })
    return movieGenre.join(', ');
}