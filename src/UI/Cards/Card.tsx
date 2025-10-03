import './card.css'
import { type MovieGenre, type SeriesGenres } from '../../core/coreType'
import { getPopularMovieGenres, getPopularSerieGenre } from '../../utilities/getGenreById'

interface CardProps {
    movieName: string,
    movieResume: string,
    movieGenre: MovieGenre[],
    movieReleaseDate: string,
    moviePoster: string,
}

interface CardPopularMovieProps {
    movieId: number,
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
    moviePoster: string,
}

interface CardInsightProps {
    movieName: string,
    movieResume: string,
    movieGenre: number[],
    movieReleaseDate: string,
    genreList: MovieGenre[];
    moviePoster: string;
}

interface CardSeriesProps {
    serieId: number,
    serieName: string,
    serieResume: string,
    serieGenre: number[],
    serieReleaseDate: string,
    genreList: SeriesGenres[];
    seriePoster: string;
}


export function Card({movieName, movieResume, movieGenre, movieReleaseDate, moviePoster }: CardProps) {

    const genreList = movieGenre.map((genre) => genre.name).join(', ');
    const poster: string = ('https://image.tmdb.org/t/p/original' + moviePoster)

    return (
        <div className="movie-card">
            <a href="movie/">
                <img className='movie-card-image' src={poster} alt="" title=""></img>

                <h3 className="movie-card-text movie-card-name">{movieName}</h3>
                <p className='movie-card-resume'>{movieResume}</p>
                <div className='movie-card-footer'>
                    <p className="movie-card-text movie-card-genre">{genreList}</p>
                    <p className="movie-card-text movie-card-release">{movieReleaseDate}</p>
                </div>
            </a>
        </div>
    )
}

export function CardPopularMovie({ movieId, movieName, movieResume, movieGenre, movieReleaseDate, genreList, moviePoster }: CardPopularMovieProps) {

    const genres = getPopularMovieGenres(movieGenre, genreList);
    const poster: string = ('https://image.tmdb.org/t/p/original' + moviePoster)
    const link: string = ('/movie/' + movieId)

    return (
        <li className="movie-card-popular">
            <a className='movie-card-link' href={link}>
                <img className='movie-card-image' src={poster} alt=""></img>
                <div className='movie-card-insight-body'>
                    <h3 className="movie-card-name">{movieName}</h3>
                    <p className='movie-card-resume'>{movieResume}</p>
                    <div className='movie-card-footer'>
                        <p className='movie-card-genre'>{genres}</p>
                        <p className='movie-card-release'>{movieReleaseDate}</p>
                    </div>
                </div>
            </a>
        </li>
    )

}

export function CardInsight({movieName, movieResume, movieGenre, movieReleaseDate, genreList, moviePoster }: CardInsightProps) {

    const genres = getPopularMovieGenres(movieGenre, genreList);
    const poster: string = ('https://image.tmdb.org/t/p/original' + moviePoster)

    return (
        <div className="movie-card-insight">
            <div className='movie-card-insight-container-image'>
                <img className='movie-card-insight-image' src={poster}></img>
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

export function CardSeries({ serieId, serieName, serieResume, serieGenre, serieReleaseDate, genreList, seriePoster }: CardSeriesProps) {
    const genres = getPopularSerieGenre(serieGenre, genreList);
    const poster: string = ('https://image.tmdb.org/t/p/original' + seriePoster)
    const link: string = ('/serie/' + serieId)

    return (
        <li className="movie-card-popular">
            <a className='movie-card-link' href={link}>
                <img className='movie-card-image' src={poster} alt=""></img>
                <div className='movie-card-insight-body'>
                    <h3 className="movie-card-name">{serieName}</h3>
                    <p className='movie-card-resume'>{serieResume}</p>
                    <div className='movie-card-footer'>
                        <p className='movie-card-genre'>{genres}</p>
                        <p className='movie-card-release'>{serieReleaseDate}</p>
                    </div>
                </div>
            </a>
        </li>
    )

}