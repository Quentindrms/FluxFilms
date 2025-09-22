import './card.css'

interface CardProps {
    movieName: string,
    movieGenre: string,
    movieReleaseDate: string,
}


export function Card({ movieName, movieGenre, movieReleaseDate }: CardProps) {

    return (
        <div className="movie-card">

            <img className='movie-card-image' src="https://placehold.co/600x400" alt="" title=""></img>

            <h3 className="movie-card-text movie-card-name">{movieName}</h3>
            <h3 className="movie-card-text movie-card-genre">{movieGenre}</h3>
            <h3 className="movie-card-text movie-card-release">{movieReleaseDate}</h3>
        </div>
    )
}