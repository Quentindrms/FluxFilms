import './card.css'
import { type MovieGenre, type MovieGenreList } from '../../core/coreType'
import { getPopularMovieGenres } from '../../utilities/getGenreById'

interface CardProps {
    movieName: string,
    movieResume: string,
    movieGenre: MovieGenre[],
    movieReleaseDate: string,
}

interface CardPopularMovieProps {
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
}

interface CardInsightProps {
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
}


export function Card({ movieName, movieResume, movieGenre, movieReleaseDate }: CardProps) {

    const genreList = movieGenre.map((genre) => genre.name).join(', ');

    return (
        <div className="movie-card">

            <img className='movie-card-image' src="https://placehold.co/600x400" alt="" title=""></img>

            <h3 className="movie-card-text movie-card-name">{movieName}</h3>
            <p className='movie-card-resume'>{movieResume}</p>
            <div className='movie-card-footer'>
                <p className="movie-card-text movie-card-genre">{genreList}</p>
                <p className="movie-card-text movie-card-release">{movieReleaseDate}</p>
            </div>
        </div>
    )
}

export function CardPopularMovie({ movieName, movieResume, movieGenre, movieReleaseDate, genreList }: CardPopularMovieProps) {

    const genres = getPopularMovieGenres(movieGenre, genreList);

    return (
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