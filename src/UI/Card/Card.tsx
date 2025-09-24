import './card.css'
import {type MovieGenre } from '../../core/coreType'

interface CardProps {
    movieName: string,
    movieResume: string,
    movieGenre: MovieGenre[],
    movieReleaseDate: string,
}


export function Card({ movieName, movieResume, movieGenre, movieReleaseDate }: CardProps) {

    return (
        <div className="movie-card">

            <img className='movie-card-image' src="https://placehold.co/600x400" alt="" title=""></img>

            <h3 className="movie-card-text movie-card-name">{movieName}</h3>
            <p className='movie-card-resume'>{movieResume}</p>
            <div className='movie-card-footer'>
                <p className="movie-card-text movie-card-genre">test</p>
                <p className="movie-card-text movie-card-release">{movieReleaseDate}</p>
            </div>
        </div>
    )
}