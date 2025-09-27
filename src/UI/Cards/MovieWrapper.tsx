import './card.css';
import { useFetcherGenreList, useFetcherPopularMovies, useFetcherTopRatedMovies, useFetcherUpcomingMovies } from '../../Hooks/useFetcher';
import { useEffect } from 'react';
import { CardPopularMovie } from './Card';

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