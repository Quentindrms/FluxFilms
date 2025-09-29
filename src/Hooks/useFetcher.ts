import { useState } from "react";
import {type ListMovieByGenre, type MovieByGenre, type MovieDetails, type MovieGenre, type MovieGenreList, type PopularMoviesList, type SeriesGenres, type TopRatedMoviesList, type UpcomingMoviesList, type SeriesByGenreList } from "../core/coreType";
import { fetcherMovieByGenre, fetcherMovieDetails, fetcherPopularMovies, fetcherSeriesByGenre, fetcherSeriesGenre, fetcherTopRatedMovies, fetcherUpcomingMovies } from "../core/fetcher";
import { fetcherGenresList } from "../core/fetcher";

export function useFetcherMovieDetails(): [MovieDetails | undefined, () => void] {

    const [value, setValue] = useState<MovieDetails>();

    async function setMovie() {
        const data = await fetcherMovieDetails(11);
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

export function useFetcherSeriesGenre(): [SeriesGenres | undefined, () => void] {
    const [value, setGenres] = useState<SeriesGenres>();
    async function setSeriesGenres() {
        const data = await fetcherSeriesGenre();
        setGenres(data);
    }
    return [value, setSeriesGenres];
}

export function useFetcherSeriesByGenre(url:string): [SeriesByGenreList | undefined, () => void] {
    const [value, setSeries] = useState<SeriesByGenreList>();
    async function setSeriesByGenre() {
        const data = await fetcherSeriesByGenre(url);
        setSeries(data);
    }
    return [value, setSeriesByGenre]
}

