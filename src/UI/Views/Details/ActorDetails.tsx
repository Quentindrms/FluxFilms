import { useParams } from "react-router";
import { ActorContainer } from "../../Container/ActorContainer";

export function ActorDetails() {
    const { id } = useParams();
    if (!id) {
        return <h1 className="title-1">Le film recherché n'existe pas</h1>
    }
    else {
        return (
            <ActorContainer id={parseInt(id)} />
        )
    }
}