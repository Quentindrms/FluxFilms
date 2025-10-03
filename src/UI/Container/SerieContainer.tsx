import './serieContainer.css'

import { useEffect } from "react";
import { useFetcherSerieDetails, useFetcherSerieRecommendation, useFetcherSeriesGenre } from "../../Hooks/useFetcher"
import { RecommendedSerieCard } from "../Cards/series/RecommendedSerieCard";
import { SeasonCard } from "../Cards/series/SeasonCard";

interface serieDetailsContainerProps {
    id: number;
}

export function SerieContainer({ id }: serieDetailsContainerProps) {

    const urlRecommendation = (`https://api.themoviedb.org/3/tv/${id}/recommendations`);

    const [serie, setSerie] = useFetcherSerieDetails(id);
    const [recommendations, setRecommendation] = useFetcherSerieRecommendation(urlRecommendation);
    const [genres, setGenres] = useFetcherSeriesGenre();

    useEffect(() => {
        setSerie();
        setRecommendation();
        setGenres();
    }, [])
    console.log(serie);
    if (!serie || !recommendations || !genres) {
        <h1 className="title-1">La série demandée n'existe pas</h1>
    }
    else {
        const backdropImage: string = ('https://image.tmdb.org/t/p/original' + serie.backdrop_path);
        console.log(`Recommandation : ${recommendations.results[0]}`)
        return (
            <div className='serie-container'>
                <h2 className="title-2">{serie.name}</h2>
                <div className='serie-container-poster' style={{ backgroundImage: `url(${backdropImage})` }}> </div>
                <div className="serie-detail-about">
                    <p className="serie-tagline primary-text-bold">Tagline : {serie.tagline}</p>
                </div>
                <div className="serie-detail-air">
                    <p className='serie-detail-text'>Première diffusion : {serie.first_air_date}</p>
                    <p className='serie-detail-text'>Prochaine diffusion : {serie.next_episode_to_air}</p>
                    <p className='serie-detail-text'>Dernière diffusion : {serie.last_air_date}</p>
                    <p className='serie-detail-text'>Statut : {serie.status}</p>
                    {serie.in_production && <p className='serie-detail-in-production secondary-text'>Actuellement en production</p>}
                </div>
                <div className="serie-detail-episode">
                    <p className='serie-detail-text'>Nombre d'épisode : {serie.number_of_episodes}</p>
                    <p className='serie-detail-text'>Nombre de saisons : {serie.number_of_seasons}</p>
                </div>

                <div className="serie-detail-seasons">
                    {serie.seasons.map((season) => {
                        return (<SeasonCard
                            air_date={season.air_date}
                            episode_count={season.episode_count}
                            name={season.name}
                            id={season.id}
                            overview={season.overview}
                            poster_path={season.poster_path}
                            season_number={season.season_number}
                            vote_average={season.vote_average}
                        />)
                    })}
                </div>

                <h2 className="title-2">Recommandation</h2>
                <div className="recommended-series-wrapper">
                    {recommendations.results.map((rec, index) => {
                        console.log(genres);
                        console.log('Série genre : ' + serie.genres[0].name)
                        return (
                            <RecommendedSerieCard
                                id={rec.id}
                                name={rec.name}
                                genre_id={rec.genres}
                                popularity={rec.popularity}
                                poster_path={rec.poster_path}
                                seriesGenres={serie.genres.map((genre) => genre.name).join(', ')}
                                key={index}
                            />
                        )
                    })}
                </div>
                <div>
                </div>

            </div>
        )
    }
}
