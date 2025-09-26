import './card.css';
import { getPopularMovieGenres } from '../../utilities/getGenreById';
import type { MovieGenre } from '../../core/coreType';

interface CardPopularMovieProps{
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
}

export function CardPopularMovie({movieName, movieResume, movieGenre, movieReleaseDate, genreList}:CardPopularMovieProps){

    const genres = getPopularMovieGenres(movieGenre, genreList);

    return(
        <div className="movie-card-popular">
                <img className='movie-card-image' src="https://placehold.co/600x400" alt=""></img>
            <div className='movie-card-insight-body'>
                <h3 className="movie-card-name">{movieName}</h3>
                <p className='movie-card-resume'>{movieResume}</p>
                <div className='movie-card-footer'>
                    <p className='movie-card-genre'>{genres}</p>
                    <p className='movie-card-release'>{movieReleaseDate}</p>
                </div>
            </div>
        </div>
    )

}