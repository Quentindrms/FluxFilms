import { useFetcherActorDetails } from "../../Hooks/useFetcher"
import { useEffect } from "react"

import './actorContainer.css'

type ActorContainerProps = {
    id: number;
}

export function ActorContainer(props: ActorContainerProps) {

    const [actor, setActor] = useFetcherActorDetails(props.id)
    useEffect(() => {
        setActor();
    }, [])

    if (!actor) {
        return <h1 className="title-1">L'acteur demandé n'existe pas</h1>
    }
    else {
        const profile = (`https://image.tmdb.org/t/p/original${actor.profile_path}`)
        return (<div className="actor-container">
                <img className="actor-container-profile" src={profile}></img>
            <div className="about-container">
                <p className="actor-container-name title-2">{actor.name}</p>
                <p className="actor-container-birthday primary-text">Date de naissance {actor.birthday}</p>
                <p className="actor-container-place-birth primary-text">Lieu de naissance : {actor.place_of_birth}</p>
                {actor.deathday && <p className="actor-container-deathday primary-text">Date de décès : {actor.deathday}</p>}
                <p className='actor-container-biography secondary-text'>{actor.biography}</p>
            </div>
        </div>)
    }
}
