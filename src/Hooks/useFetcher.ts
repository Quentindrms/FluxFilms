import { useState } from "react";
import type { MovieDetails, MovieGenre } from "../core/coreType";
import { fetcherMovieDetails } from "../core/fetcher";
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
    console.log(value);
    return [value, setGenreList];
}