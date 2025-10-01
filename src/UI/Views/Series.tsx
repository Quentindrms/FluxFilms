import { ListSeriesByGenre } from "../Cards/MovieWrapper";

export function Series() {

    const serieCategorieDocumentary = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=99';
    const serieCategorieAction = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10759';
    const serieCategorieWars = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10768';
    const serieCategorieNews = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10763';
    const serieCategorieMystery = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=9648';


    return (
        <div>
            <h2 className="title-2">Séries documentaires</h2>
            <ListSeriesByGenre url={serieCategorieDocumentary} />
            <h2 className="title-2">Séries actions</h2>
            <ListSeriesByGenre url={serieCategorieAction} />
            <h2 className="title-2">Séries guerres</h2>
            <ListSeriesByGenre url={serieCategorieWars} />
            <h2 className="title-2">Séries actualités</h2>
            <ListSeriesByGenre url={serieCategorieNews}/>
            <h2 className="title-2">Séries mystères</h2>
            <ListSeriesByGenre url={serieCategorieMystery} />Ò
        </div>
    )

}