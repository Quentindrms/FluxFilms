import './movieContainer.css';
import { getPopularMovieGenres } from '../../../../utilities/getGenreById';

import { useEffect } from "react";
import { useFetcherGenreList, useFetcherMovieDetails } from "../../../../Hooks/useFetcher";
import { ActorCard } from '../../../Cards/ActorCard';

interface MovieContainerProps {
    id: number,
}

export function MovieContainer({ id }: MovieContainerProps) {

    const [movie, setMovie] = useFetcherMovieDetails(id);


    useEffect(() => {
        setMovie();
    }, []);

    if (!movie) {
        <h1 className="title-1">Chargement...</h1>
    }
    else {
        const genresList = movie.genres.map((movie) => movie.name).join(', ');
        const poster: string = ('https://image.tmdb.org/t/p/original' + movie.backdrop_path)
        return (
            <div>
            <div>
                <h2 className="movie-container-title-2">{'' + movie.title}</h2>
                <div className='movie-container-poster' style={{ backgroundImage: `url(${poster})` }}> </div>
                <p className='movie-container-overview'>{movie.overview}</p>
                <p className='movie-container-paragraph'>Date de sortie : {movie.release_date}</p>
                <p className='movie-container-paragraph'>Durée : {movie.runtime} minutes</p>
                <p className="movie-container-paragraph">Note : <span className='movie-container-style-cylamen-light'>{Math.round(movie.vote_average*10)}/10</span></p>
                <p className='movie-container-genre'>Genres : <span className='movie-container-style-cylamen-dark'>{genresList}</span></p>
            </div>
                <ActorCard movieId={id} />
            </div>
        )
    }


}