import './recommendedSerieCard.css';

interface RecommendedSerieCardProps {
    id: number,
    name: string,
    poster_path: string,
    genre_id: number[],
    popularity: number,
}

export function RecommendedSerieCard({ id, name, poster_path, genre_id, popularity }: RecommendedSerieCardProps) {

    const serieLink = ('/serie/' + id);
    const posterLink = ('https://image.tmdb.org/t/p/original' + poster_path)

    return (
        <div className="recommended-serie-card">
            <a className="recommended-serie-link" href={serieLink}>
                <img className="recommended-serie-poster" src={posterLink} ></img>
                <p className="recommended-serie-name">{name}</p>
                <p className="recommended-serie-popularity">{popularity}</p>
            </a>
        </div>
    )
}