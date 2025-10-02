/** Movies */

export type MovieDetails = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: MovieGenre[]
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
    vote_average: number,
    vote_count: number,
}

export type PopularMovieDetail = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type PopularMoviesList = {
    page: number,
    results: PopularMovieDetail[]
    total_pages: number,
    total_results: number,
}

export type TopRatedMovies = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type TopRatedMoviesList = {
    page: number,
    results: TopRatedMovies[]
    total_pages: number,
    total_results: number,
}

export type UpcomingMovies = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type UpcomingMoviesList = {
    dates: Dates,
    page: number,
    results: UpcomingMovies[],
    total_pages: number,
    total_results: number,
}

export type Dates = {
    maximum: string,
    minimun: string,
}

export type ListMovieByGenre = {
    dates: Dates,
    page: number,
    results: MovieByGenre[],
    total_pages: number,
    total_results: number,
}

export type MovieByGenre = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type MovieCredits = {
    id: number,
    cast: MovieCast[],
    crew: MovieCrew[],
}

export type MovieCast = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: number,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number,
}

export type MovieCrew = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_departement: string,
    popularity: number,
    profile_path: string,
    credit_id: string,
    department: string,
    job: string,
}

export type RecommendedMovie = {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title:string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type MovieRecommandations = {
    page: number,
    results: RecommendedMovie[],
    total_pages: number,
    total_results: number,
}

/** Genres */

export type MovieGenreList = {
    genres: MovieGenre[];
}

export type MovieGenre = {
    id: number,
    name: string,
}

/** Production */

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

/** Series */

export type SeriesDetails = {
    adult: boolean,
    backdropPath: string,
    createdBy: CreatedBy[],
    episodeRunTime: number[],
    firstAirDate: string,
    genre: SeriesGenres[],
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

export type SeriesByGenre = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

export type SeriesByGenreList = {
    page: number,
    results: SeriesByGenre[],
    total_pages: number,
    total_results: number,
}

export type CreatedBy = {
    id: number,
    creditId: string,
    name: string,
    gender: number,
    profilePath: string,
}

export type SeriesGenres = {
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