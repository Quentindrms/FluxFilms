import './card.css';
import { getPopularMovieGenres } from '../../utilities/getGenreById';
import type { MovieGenre } from '../../core/coreType';

interface CardInsightProps {
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
}

export function CardInsight({ movieName, movieResume, movieGenre, movieReleaseDate, genreList }: CardInsightProps) {

    const genres = getPopularMovieGenres(movieGenre, genreList);

    return (
        <div className="movie-card-insight">
            <div className='movie-card-insight-container-image'>
                <img className='movie-card-image-insight' src="https://placehold.co/1000x250" alt=""></img>
            </div>
            <div className='movie-card-insight-body'>
                <h3 className="movie-card-name-insight">{movieName}</h3>
                <p className='movie-card-resume-insight'>{movieResume}</p>
                <div className='movie-card-footer-insight'>
                    <p className='movie-card-genre-insight'>{genres}</p>
                    <p className='movie-card-release-insight'>{movieReleaseDate}</p>
                </div>
            </div>
        </div>
    )
}