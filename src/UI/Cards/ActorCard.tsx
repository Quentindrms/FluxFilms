import './actorCard.css'

import { useEffect } from "react";
import { useFetcherCreditByMovie } from "../../Hooks/useFetcher"

interface ActorCardProps {
    movieId: number,
}

export function ActorCard({ movieId }: ActorCardProps) {

    const [credits, setCredits] = useFetcherCreditByMovie(movieId)

    useEffect(() => {
        setCredits();
    }, [])

    const profile: string = ('https://image.tmdb.org/t/p/original')
    if (!credits?.cast) {
        console.log('Pas de data');
    }
    else {
        return (
            <div className='actor-wrapper'>
                {credits.cast.map((actor, index) => (
                    <div className="actor-card">
                    <img className='actor-card-image' src={profile+actor.profile_path}></img>
                    <p className="actor-card-character">{credits.cast[index].name} dans le rôle de {credits.cast[index].character}</p>
                    </div>
                    ))}
            </div>
        )
    }
}