import type { MovieDetails } from '../../core/coreType';
import { fetcher } from '../../core/fetcher'
import { Card } from '../Card/Card';

export const Series = async () => {

    try{
    const data = await fetcher();
    console.log(`DATA = ${data.title}`);
    } catch(error){
        console.error(error);
    }


    return (
        <div>
            <Card movieName={data.title} movieGenre={data.genres} movieResume={data.overview} movieReleaseDate={data.releaseDate} />
        </div>
    )

}