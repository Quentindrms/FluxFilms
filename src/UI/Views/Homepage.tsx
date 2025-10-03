import { CardInsight } from "../Cards/Card";
import { useFetcherPopularMovies, useFetcherGenreList, useFetcherMovieDetails } from "../../Hooks/useFetcher";
import { useEffect } from "react";
import { PopularMovieWrapper, TopRatedMovieWrapper, UpcommingMovieWrapper } from "../Cards/MovieWrapper";

export const Homepage = () => {

    const [genre, setGenre] = useFetcherGenreList();
    const [popularMovies, setPopularMovies] = useFetcherPopularMovies();

    useEffect(() => {
        setGenre();
        setPopularMovies();
    }, [])



    if (!genre || !popularMovies) {
        return <h1 className='title-2'>Chargement...</h1>
    }
    else {
        const random = Math.floor(Math.random() * popularMovies.results.length);
        return (<div>

            <h2 className='title-2'>À l'affiche</h2>

            <CardInsight
                movieId={popularMovies.results[random].id}
                movieName={popularMovies.results[random].title}
                movieResume={popularMovies.results[random].overview}
                movieGenre={popularMovies.results[random].genre_ids}
                movieReleaseDate={popularMovies.results[random].release_date}
                moviePoster={popularMovies.results[random].backdrop_path}
                genreList={genre} />

            <h2 className='title-2'>Les plus populaires</h2>

            <PopularMovieWrapper />

            <h2 className='title-2'>Les mieux notés</h2>

            <TopRatedMovieWrapper />

            <h2 className='title-2'>Prochaines sorties</h2>

            <UpcommingMovieWrapper />

        </div>
        )
    }
}