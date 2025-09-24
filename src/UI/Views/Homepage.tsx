import { Card } from "../Card/Card";
import { CardInsight } from "../Card/CardInisght";

export const Homepage = () => {
    return (<div>

        <h2 className='title-2'>Film à l'affiche</h2>

        <CardInsight
            movieName='Lorem ipsum'
            movieResume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu quam, elementum et blandit eu, ultricies quis massa. Proin vestibulum fringilla erat eget dictum. Sed id suscipit tellus. Morbi vitae turpis fringilla, mattis tellus eget, iaculis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus'
            movieGenre='Lorem'
            movieReleaseDate='1997' />

        <h2 className='title-2'>Nos films du moment</h2>
        <div className="card-wrapper">

            <Card
                movieName='Lorem ipsum'
                movieResume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu quam, elementum et blandit eu, ultricies quis massa. Proin vestibulum fringilla erat eget dictum. Sed id suscipit tellus. Morbi vitae turpis fringilla, mattis tellus eget, iaculis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus'
                movieGenre='Lorem'
                movieReleaseDate='1997' />
            <Card
                movieName='Lorem ipsum'
                movieResume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu quam, elementum et blandit eu, ultricies quis massa. Proin vestibulum fringilla erat eget dictum. Sed id suscipit tellus. Morbi vitae turpis fringilla, mattis tellus eget, iaculis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus'
                movieGenre='Lorem'
                movieReleaseDate='1997' />
            <Card
                movieName='Lorem ipsum'
                movieResume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu quam, elementum et blandit eu, ultricies quis massa. Proin vestibulum fringilla erat eget dictum. Sed id suscipit tellus. Morbi vitae turpis fringilla, mattis tellus eget, iaculis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus'
                movieGenre='Lorem'
                movieReleaseDate='1997' />
            <Card
                movieName='Lorem ipsum'
                movieResume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu quam, elementum et blandit eu, ultricies quis massa. Proin vestibulum fringilla erat eget dictum. Sed id suscipit tellus. Morbi vitae turpis fringilla, mattis tellus eget, iaculis mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus'
                movieGenre='Lorem'
                movieReleaseDate='1997' />
        </div>
    </div>)
}