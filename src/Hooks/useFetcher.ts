import { useState } from "react";
import { type ListMovieByGenre, type MovieDetails, type MovieGenre, type PopularMoviesList, type SeriesGenres, type TopRatedMoviesList, type UpcomingMoviesList, type SeriesByGenreList, type MovieCredits, type MovieRecommandations, type SerieDetails, type SerieRecommendation, type ActorDetails } from "../core/coreType";
import { fetcherActorDetails, fetcherCreditByMovie, fetcherMovieByGenre, fetcherMovieDetails, fetcherMovieRecommandation, fetcherPopularMovies, fetcherSerieDetails, fetcherSeriesByGenre, fetcherSeriesGenre, fetcherTopRatedMovies, fetcherUpcomingMovies, serieRecommendation } from "../core/fetcher";
import { fetcherGenresList } from "../core/fetcher";

export function useFetcherMovieDetails(id: number): [MovieDetails | undefined, () => void] {

    const [value, setValue] = useState<MovieDetails>();

    async function setMovie() {
        const data = await fetcherMovieDetails(id);
        setValue(data);
    };

    return [value, setMovie]
};

export function useFetcherGenreList(): [MovieGenre[] | undefined, () => void] {

    const [value, setValue] = useState<MovieGenre[]>([]);
    async function setGenreList() {
        const data = await fetcherGenresList();
        setValue(data);
    };
    return [value, setGenreList];
}

export function useFetcherPopularMovies(): [PopularMoviesList | undefined, () => void] {

    const [value, setValue] = useState<PopularMoviesList>();
    async function setPopularMovies() {
        const data = await fetcherPopularMovies();
        setValue(data);
    };
    return [value, setPopularMovies]
}

export function useFetcherTopRatedMovies(): [TopRatedMoviesList | undefined, () => void] {
    const [value, setValue] = useState<TopRatedMoviesList>();
    async function setTopRatedMovies() {
        const data = await fetcherTopRatedMovies();
        setValue(data);
    }
    return [value, setTopRatedMovies];
}

export function useFetcherUpcomingMovies(): [UpcomingMoviesList | undefined, () => void] {
    const [value, setValue] = useState<UpcomingMoviesList>();
    async function setUpcomingMoviesList() {
        const data = await fetcherUpcomingMovies();
        setValue(data);
    }
    return [value, setUpcomingMoviesList];
}

export function useFetcherMovieByGenre(url: string): [ListMovieByGenre | undefined, () => void] {
    const [value, setValue] = useState<ListMovieByGenre>();
    async function setMovieByGenre() {
        const data = await fetcherMovieByGenre(url);
        setValue(data)
    }
    return [value, setMovieByGenre]
}

/** Séries */

export function useFetcherSerieDetails(id: number): [SerieDetails | undefined, () => void] {
    const [value, setValue] = useState<SerieDetails>();
    async function setSerieDetaisl() {
        const data = await fetcherSerieDetails(id);
        setValue(data);
    }
    return [value, setSerieDetaisl]
}

export function useFetcherSeriesGenre(): [SeriesGenres[] | undefined, () => void] {
    const [value, setGenres] = useState<SeriesGenres[]>();
    async function setSeriesGenres() {
        const data = await fetcherSeriesGenre();
        setGenres(data.genres);
    }
    return [value, setSeriesGenres];
}

export function useFetcherSeriesByGenre(url: string): [SeriesByGenreList | undefined, () => void] {
    const [value, setSeries] = useState<SeriesByGenreList>();
    async function setSeriesByGenre() {
        const data = await fetcherSeriesByGenre(url);
        setSeries(data);
    }
    return [value, setSeriesByGenre]
}

export function useFetcherSerieRecommendation(url: string): [SerieRecommendation | undefined, () => void] {
    const [value, setSeries] = useState<SerieRecommendation>();
    async function setSerieRecommendation() {
        const data = await serieRecommendation(url);
        setSeries(data);
    }
    return [value, setSerieRecommendation]
}

/** Casting */

export function useFetcherCreditByMovie(id: number): [MovieCredits | undefined, () => void] {
    const [value, setValue] = useState<MovieCredits>();
    const url = ('https://api.themoviedb.org/3/movie/' + id + '/credits');
    async function setCredit() {
        const data = await fetcherCreditByMovie(url);
        setValue(data);
    }
    return [value, setCredit];
}

/** Movie recommandation */

export function useFetcherMovieRecommandation(id: number): [MovieRecommandations | undefined, () => void] {
    const [value, setValue] = useState<MovieRecommandations>();
    const url = ('https://api.themoviedb.org/3/movie/' + id + '/recommendations');
    async function setMovieRecommandation() {
        const data = await fetcherMovieRecommandation(url);
        setValue(data);
    }
    return [value, setMovieRecommandation]
}

/** Actor details */

export function useFetcherActorDetails(id:number): [ActorDetails | undefined, () => void]{

    const [value, setValue] = useState<ActorDetails>();
    async function setActorDetails(){
        const data = await fetcherActorDetails(id);
        setValue(data);
    }
    return [value, setActorDetails]
}