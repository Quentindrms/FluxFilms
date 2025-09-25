import { useFetcherGenreList, useFetcherMovieDetails } from "../../Hooks/useFetcher"
import { Card } from "../Card/Card";
import type { MovieDetails } from "../../core/coreType";
import { useEffect } from "react";

export const Movies = () => {

    const [movie, setMovie] = useFetcherMovieDetails();
    const [genre, setGenre] = useFetcherGenreList();

    useEffect(() => {
        setMovie();
        setGenre();
    }, []);

    console.log(movie?.genres);

    if (!movie || !genre) return <div>Chargement</div>

    return (
        <div>
            <div className="card-wrapper">
                <Card movieGenres={movie.genres} movieName={movie.original_title} movieReleaseDate={movie.release_date} movieResume={movie.overview} />
            </div>
        </div>
    )
}