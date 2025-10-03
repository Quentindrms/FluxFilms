import type { MovieGenre, SeriesGenres } from "../core/coreType"

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

export function getPopularSerieGenre(idList: number[], genreList:SeriesGenres[]){

    const serieGenre:string[] = []

    console.log(`GenreID: ${idList}`)
    console.log(`GenreList : ${genreList[0]}`)
    idList.forEach((genreId) => {
        const foundGenre = genreList.find((genre) => genre.id == genreId)
        if (foundGenre){
            serieGenre.push(foundGenre.name);
        }
    })
    return serieGenre.join(', ');
}

