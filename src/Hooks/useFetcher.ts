import { useState } from "react";
import type { MovieDetails, MovieGenre, PopularMoviesList } from "../core/coreType";
import { fetcherMovieDetails, fetcherPopularMovies } from "../core/fetcher";
import { fetcherGenresList } from "../core/fetcher";

export function useFetcherMovieDetails() :[MovieDetails | undefined, () => void]{

    const [value, setValue] = useState<MovieDetails>();

    async function setMovie(){
        const data = await fetcherMovieDetails(11);
        setValue(data);
    };

    return [value, setMovie]
};

export function useFetcherGenreList(): [MovieGenre[] | undefined, () => void]{

    const [value, setValue] = useState<MovieGenre[]>([]);
    async function setGenreList(){
        const data = await fetcherGenresList();
        setValue(data);
    };
    return [value, setGenreList];
}

export function useFetcherPopularMovies(): [PopularMoviesList | undefined, () => void]{

    const [value, setValue] = useState<PopularMoviesList>();
    async function setPopularMovies(){
        const data = await fetcherPopularMovies();
        setValue(data);
    };
    return [value, setPopularMovies]
}