import { useParams } from "react-router"
import { MovieContainer } from "../../Container/MovieContainer";

export function MovieDetails() {

    const { id } = useParams();
    if (!id) {
        <h1 className="title-1">Le film recherché n'existe pas</h1>
    }
    else {
        return (
            <div>
                <MovieContainer id={parseInt(id)} />
            </div>
        )
    }
}