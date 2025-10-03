import { useFetcherActorDetails } from "../../Hooks/useFetcher"
import { useEffect } from "react"

type ActorContainerProps= {
    id: number;
}

export function ActorContainer(props:ActorContainerProps){

    const [actor, setActor] = useFetcherActorDetails(props.id)
    useEffect(() => {
        setActor();
    }, [])

    if(!actor){
        return <h1 className="title-1">L'acteur demandé n'existe pas</h1>
    }

    return(<div className="actor-container">
        <p className="actor-container-name">{actor.name}</p>
    </div>)
}
