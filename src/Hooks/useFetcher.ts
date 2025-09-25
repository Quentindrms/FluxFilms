import { useState } from "react";
import type { MovieDetails } from "../core/coreType";
import { fetcherMovieDetails } from "../core/fetcher";

export function useFetcherMovieDetails() :[MovieDetails | undefined, () => void]{

    const [value, setValue] = useState<MovieDetails>();

    async function setMovie(){
        const data = await fetcherMovieDetails(11);
        setValue(data);
    };

    return [value, setMovie]
};