import { ListMovieByGenre } from "../Cards/MovieWrapper";

export const Movies = () => {

    const movieCategorieAction = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28'
    const movieCategorieDocumentary = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99'
    const movieCategorieScienceFiction = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=878'
    const movieCategorieThriller = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=53'
    const movieCategorieCrime = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=80'

        return (
            <div>
                <h2 className="title-2">Catégorie action</h2>
                <ListMovieByGenre url={movieCategorieAction}/>
                <h2 className="title-2">Catégorie documentaire</h2>
                <ListMovieByGenre url={movieCategorieDocumentary} />
                <h2 className="title-2">Science fiction</h2>
                <ListMovieByGenre url={movieCategorieScienceFiction} />
                <h2 className="title-2">Thriller</h2>
                <ListMovieByGenre url={movieCategorieThriller} />
                <h2 className="title-2">Crime</h2>
                <ListMovieByGenre url={movieCategorieCrime} />
            </div>
        )
    }