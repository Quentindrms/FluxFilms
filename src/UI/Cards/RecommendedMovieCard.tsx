import './card.css';

interface RecommendedMovieCardProps{
    id: number
    title: string,
    overview: string,
    release_date: string,
    genres: string,
    posterPath: string,
}

export function RecommendedMovieCard({id, title, overview, release_date, genres, posterPath}:RecommendedMovieCardProps) {

    const movieLink = ('/movie/'+id);
    const posterLink = ('https://image.tmdb.org/t/p/original/'+posterPath)

    return (
        <div className="recommended-movie-card">
            <a className='recommended-movie-link' href={movieLink}>
            <img className='recommended-movie-image' src={posterLink}></img>
            <p className="recommended-movie-name">{title}</p>
            <p className="recommended-movie-overview">{overview}</p>
            <p className="recommended-movie-release">{release_date}</p>
            <p className="recommended-movie-genres">{genres}</p>
            </a>
        </div>
    )
}