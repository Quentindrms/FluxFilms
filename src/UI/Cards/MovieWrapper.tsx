import './card.css';
import { useFetcherGenreList, useFetcherMovieByGenre, useFetcherPopularMovies, useFetcherSeriesByGenre, useFetcherSeriesGenre, useFetcherTopRatedMovies, useFetcherUpcomingMovies } from '../../Hooks/useFetcher';
import { useEffect } from 'react';
import { CardPopularMovie, CardSeries } from './Card';
import type { ListMovieByGenre} from '../../core/coreType';

interface ListMovieByGenreProps {
    url: string
}

interface ListSeriesByGenreProps {
    url: string
}

export function PopularMovieWrapper() {

    const [genre, setGenre] = useFetcherGenreList();
    const [popularMovies, setPopularMovies] = useFetcherPopularMovies();

    useEffect(() => {

        setGenre();
        setPopularMovies();
    }, [])

    if (!genre || !popularMovies) {
        return <h1 className='title-1'>Chargement...</h1>
    }
    else {
        return (
            <ul className='movie-wrapper'>
                {popularMovies.results.map((movie) => (
                    <CardPopularMovie
                        movieId={movie.id}
                        genreList={genre}
                        movieGenre={movie.genre_ids}
                        movieName={movie.title}
                        movieReleaseDate={movie.release_date}
                        moviePoster={movie.poster_path}
                        movieResume={movie.overview}
                    />
                ))}
            </ul>
        )
    }
}

export function TopRatedMovieWrapper() {

    const [genre, setGenre] = useFetcherGenreList();
    const [topRatedMovies, setTopRatedMovies] = useFetcherTopRatedMovies();

    useEffect(() => {
        setGenre();
        setTopRatedMovies();
    }, []);

    if (!genre || !topRatedMovies) {
        return <h1 className='title-1'>Chargement...</h1>
    }
    else {
        return (
            <div className='movie-wrapper'>
                {topRatedMovies.results.map((movie) => (
                    <CardPopularMovie
                        movieId={movie.id}
                        genreList={genre}
                        movieGenre={movie.genre_ids}
                        movieName={movie.title}
                        movieReleaseDate={movie.release_date}
                        moviePoster={movie.poster_path}
                        movieResume={movie.overview}
                    />
                ))};
            </div>
        )
    }
}

export function UpcommingMovieWrapper() {

    const [movies, setMovie] = useFetcherUpcomingMovies();
    const [genre, setGenre] = useFetcherGenreList();

    useEffect(() => {
        setMovie();
        setGenre();
    }, []);

    if (!movies || !genre) {
        return <h1 className='title-1'>Chargement...</h1>
    }
    else {
        return (
            <div className='movie-wrapper'>
                {movies.results.map((movie) => (
                    <CardPopularMovie
                        movieId={movie.id}
                        genreList={genre}
                        movieGenre={movie.genre_ids}
                        movieName={movie.title}
                        movieReleaseDate={movie.release_date}
                        moviePoster={movie.poster_path}
                        movieResume={movie.overview} />
                ))}
            </div>
        )
    }
}

export function ListMovieByGenre({ url }: ListMovieByGenreProps) {
    const [movies, setMovie] = useFetcherMovieByGenre(url);
    const [genre, setGenre] = useFetcherGenreList();

    useEffect(() => {
        setMovie();
        setGenre();
    }, [])

    if (!movies || !genre) {
        <h1 className='title-1'>Chargement...</h1>
    }
    else {
        return (
            <div className='movie-wrapper'>
                {movies.results.map((movie) => (
                    <CardPopularMovie
                        movieId={movie.id}
                        genreList={genre}
                        movieGenre={movie.genre_ids}
                        movieName={movie.title}
                        movieReleaseDate={movie.release_date}
                        moviePoster={movie.poster_path}
                        movieResume={movie.overview}
                    />
                ))}
            </div>
        )
    }
}

export function ListSeriesByGenre({ url }: ListSeriesByGenreProps) {
    const [series, setSerie] = useFetcherSeriesByGenre(url);
    const [genre, setGenre] = useFetcherSeriesGenre();

    console.log(`ListSeriesByGenre = ${series?.results[0].genre_ids}`);

    useEffect(() => {
        setSerie();
        setGenre();
    }, [])

    if (!series || !genre) {
        <h1 className='title-1'>Chargement...</h1>
    }
    else {
        return (
            <div className='movie-wrapper'>
                {series.results.map((serie) => (
                    <CardSeries
                        serieId={serie.id}
                        genreList={genre}
                        serieGenre={serie.genre_ids}
                        serieName={serie.name}
                        serieReleaseDate={serie.release_date}
                        seriePoster={serie.poster_path}
                        serieResume={serie.overview}
                    />
                ))}
            </div>

        )
    }
}