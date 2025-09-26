import './card.css';
import { useFetcherMovieDetails, useFetcherGenreList, useFetcherPopularMovies } from '../../Hooks/useFetcher';
import { useEffect } from 'react';
import { CardPopularMovie } from './CardPopularMovie';

export function MovieWrapper() {


    return (
        <div className='movie-wrapper'>

        </div>
    )
}

export function PopularMoviesWrapper() {

    const [movie, setMovie] = useFetcherMovieDetails();
    const [genre, setGenre] = useFetcherGenreList();
    const [popularMovies, setPopularMovies] = useFetcherPopularMovies();

    useEffect(() => {
        setMovie();
        setGenre();
        setPopularMovies();
    })

    if (!movie || !genre || !popularMovies) {
        return <h1>Chargement...</h1>
    }
    else {
        console.log(popularMovies);
        return (
            <div className='movie-wrapper'>
                {popularMovies.results.map((movie) => (
                    <CardPopularMovie
                        genreList={genre}
                        movieGenre={movie.genre_ids}
                        movieName={movie.title}
                        movieReleaseDate={movie.release_date}
                        movieResume={movie.overview}
                    />
                ))}
            </div>
        )
    }
}