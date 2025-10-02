import { useEffect } from "react";
import type { SerieDetails } from "../../core/coreType"
import { useFetcherSerieDetails } from "../../Hooks/useFetcher"

interface serieDetailsContainerProps {
    id: number;
}

export function SerieContainer({ id }: serieDetailsContainerProps) {

    const [serie, setSerie] = useFetcherSerieDetails(id);

    useEffect(() => {
        setSerie();
    }, [])
    console.log(serie);
    if (!serie) {
        <h1 className="title-1">La série demandée n'existe pas</h1>
    }
    else {
        const backdropImage: string = ('https://image.tmdb.org/t/p/original' + serie.backdrop_path);
        console.log(backdropImage);
        return (
            <div>
                <h2 className="title-2">{serie.name}</h2>
                <img src={backdropImage}></img>
                <div className="serie-detail-about">
                    <p>Genre : </p>
                </div>
                <div className="serie-detail-air">
                    <p>Première diffusion : {serie.first_air_date}</p>
                    <p>Prochaine diffusion : {serie.next_episode_to_air}</p>
                    <p>Dernière diffusion : {serie.last_air_date}</p>
                    <p>Statut : {serie.status}</p>
                    <p>: {serie.in_production}</p>
                </div>
                <div className="serie-detail-episode">
                    <p>Nombre d'épisode : {serie.number_of_episodes}</p>
                    <p>Nombre de saisons : {serie.number_of_seasons}</p>
                </div>

            </div>
        )
    }
}
