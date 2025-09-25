import { useFetcherMovieDetails } from "../../Hooks/useFetcher"
import { Card } from "../Card/Card";
import type { MovieDetails } from "../../core/coreType";
import { useEffect } from "react";

export const Movies = () => {

    const [movie, setMovie] = useFetcherMovieDetails();

    useEffect(() => {
        setMovie()
    }, []);

    console.log(movie);

    if(!movie) return <div>Chargement</div>

    return(
        <div className="card-wrapper">
            <Card movieGenre={movie.genres} movieName={movie.original_title} movieReleaseDate={movie.release_date} movieResume={movie.overview}/>
        </div>
    )
}