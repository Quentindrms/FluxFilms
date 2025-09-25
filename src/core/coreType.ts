
export type MovieDetails = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres:MovieGenre[]
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_compagnies: ProductionCompagnies[],
    production_countries: ProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spokenLanguage: SpokenLanguages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    voteAverage: number,
    voteCount: number,
}

export type MovieGenreList = { 
    genres : MovieGenre[];
}

export type MovieGenre = {
    id: number,
    name: string,
}

export type ProductionCompagnies = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export type ProductionCountries = {
    iso_3166_1: string,
    name: string,
}

export type SpokenLanguages = {
    englishName: string,
    iso_639_1: string,
    name: string,
}

export type SeriesDetails = {
    adult: boolean,
    backdropPath: string,
    createdBy: CreatedBy[],
    episodeRunTime: number[],
    firstAirDate: string,
    genre: SeriesGenre[],
    homepage: string,
    id: number,
    inProduction: boolean,
    languages: string,
    lastAirDate: string,
    lastEpisodeToAir: string,
    name: string,
    nextEpisodeToAir: string,
    networks: Networks[],
    numberOfEpisodes: number,
    numberOfSeasons: number,
    originCountry: string[],
    productionCompagnies: ProductionCompagnies[],
    productionCountries: ProductionCountries[],
    spokenLanguage: SpokenLanguages[]
    status: string,
    tagline: string,
    type: string,
    voteAverage: number,
    voteCount: number,

}

export type CreatedBy = {
    id: number,
    creditId: string,
    name: string,
    gender: number,
    profilePath: string,
}

export type SeriesGenre = {
    id: number,
    name: string,
}

export type LastEpisodeToAir = {
    id: number,
    name: string,
    overview: string,
    vote_average: number,
    vote_count: number,
    airDate: string,
    epsiodeNumber: number,
    productionCode: string,
    runtime: number,
    seasonNumber: number,
    showId: number,
    stillPath: string,
}

export type Networks = {
    id: number,
    logoPath: string,
    name: string,
    originCountry: string,
}

export type Seasons = {
    airDate: string,
    episodeCount: number,
    id: number,
    name: string,
    overview: string,
    posterPath: string,
    seasonNumber: string,
    voteAverage: number
}