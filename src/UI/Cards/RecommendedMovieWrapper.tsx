import { useEffect } from "react";
import { useFetcherGenreList, useFetcherMovieRecommandation } from "../../Hooks/useFetcher";
import { RecommendedMovieCard } from "./RecommendedMovieCard";
import { getPopularMovieGenres } from "../../utilities/getGenreById";

interface RecommendedMovieWrapperProps {
    id: number
}

export function RecommendedMovieWrapper({ id }: RecommendedMovieWrapperProps) {

    const [movies, setMovie] = useFetcherMovieRecommandation(id);
    const [genres, setGenres] = useFetcherGenreList();

    useEffect(() => {
        setMovie();
        setGenres();
    }, [])
    if (!movies || !genres) {
        return <h1 className="title-1">Chargement...</h1>
    }
    else {
        return (
            <div className="recommended-movie-wrapper">
                {movies.results.map((movie) => {
                    const movieGenres = getPopularMovieGenres(movie.genre_ids, genres);
                    return (
                        <RecommendedMovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            genres={movieGenres}
                            release_date={movie.release_date}
                            posterPath={movie.poster_path}
                        />
                    );
                })}
            </div>
        )
    }
}