import { useFetcherGenreList, useFetcherMovieDetails, useFetcherPopularMovies } from "../../Hooks/useFetcher"
import { Card } from "../Cards/Card";
import { useEffect } from "react";
import { CardInsight } from "../Cards/CardInisght";

export const Movies = () => {

    const [movie, setMovie] = useFetcherMovieDetails();
    const [genre, setGenre] = useFetcherGenreList();
    const [popularMovies, setPopularMovies] = useFetcherPopularMovies();

    useEffect(() => {
        setMovie();
        setGenre();
        setPopularMovies();
    }, []);

    console.log(genre);

    if(!movie || !genre || !popularMovies){
        <div>Chargement</div>
    }
    else{

    return (
        <div>
            <div className="card-wrapper">
                <Card movieGenre={movie.genres} movieName={movie.original_title} movieReleaseDate={movie.release_date} movieResume={movie.overview} />
            </div>

            <div>
                <div className="card-wrapper">
                    <CardInsight movieGenre={popularMovies.results[0].genre_ids} movieName={popularMovies.results[0].title} movieReleaseDate={popularMovies.results[0].release_date} movieResume={popularMovies.results[0].release_date} genreList={genre} key={1} />
                </div>
            </div>

        </div>
    )
}
}