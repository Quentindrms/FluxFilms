import { Card } from "../Cards/Card";
import { CardInsight } from "../Cards/CardInisght";
import { useFetcherPopularMovies, useFetcherGenreList, useFetcherMovieDetails } from "../../Hooks/useFetcher";
import { useEffect } from "react";
import { MovieWrapper, PopularMoviesWrapper } from "../Cards/MovieWrapper";

export const Homepage = () => {

    const [movie, setMovie] = useFetcherMovieDetails();
    const [genre, setGenre] = useFetcherGenreList();
    const [popularMovies, setPopularMovies] = useFetcherPopularMovies();

    useEffect(() => {
        setMovie();
        setGenre();
        setPopularMovies();
    })

    if (!movie || !genre || !popularMovies) {
        return <h1 className='title-2'>Chargement...</h1>
    }
    else {

        return (<div>

            <h2 className='title-2'>Film à l'affiche</h2>

            <CardInsight
                movieName={popularMovies.results[0].title}
                movieResume={popularMovies.results[0].overview}
                movieGenre={popularMovies.results[0].genre_ids}
                movieReleaseDate={popularMovies.results[0].release_date}
                genreList={genre} />

            <h2 className='title-2'>Films populaires</h2>

            <PopularMoviesWrapper />

        </div>
        )
    }
}