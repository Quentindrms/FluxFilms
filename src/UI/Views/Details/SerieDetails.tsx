import { useParams } from "react-router";
import { SerieContainer } from "../../Container/SerieContainer";


export function SerieDetais() {

    const {id} = useParams();
    if (!id) {
        return <h1 className="title-1">Le film recherché n'existe pas</h1>
    }
    else {

        return (
            <SerieContainer id={parseInt(id)} />
        );
    }
}