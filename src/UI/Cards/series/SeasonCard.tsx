import './seasonCard.css';

interface SeasonCardProps {
    air_date: string,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: string,
    vote_average: number
}

export function SeasonCard({ air_date, episode_count, id, name, overview, poster_path, season_number, vote_average }: SeasonCardProps) {

    const posterLink = ('https://image.tmdb.org/t/p/original' + poster_path)

    return (
        <div className="season-card" key={id}>
            <div className='poster-container'>
            <img className="season-poster" src={posterLink} ></img>
            </div>
            <div className='season-about season-text'>
            <h3 className="season-name title-3">{name}</h3>
            <p className="season-overview season-text">{overview}</p>
            <p className="season-number season-text">Numéro de la saison : {season_number}</p>
            <p className="season-air-date season-text">Date de sortie : {air_date}</p>
            <p className="season-episode-count season-text">Nombre d'épsiode : {episode_count}</p>
            <p className="season-number season-text">Note moyenne : {vote_average}</p>
            </div>
        </div>
    )

}