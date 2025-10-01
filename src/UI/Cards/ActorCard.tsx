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
            <div>
                <img src={profile} alt=''></img>
                <p className="actor-card-character">Jean-Michel dans le rôle de {credits.cast[0].character}</p>

            </div>
        )
    }
}