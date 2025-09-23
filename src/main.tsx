import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css';

import { Button } from './UI/Button/Buttons.tsx'
import { Header } from './UI/Header/Header.tsx'
import { Footer } from './UI/Footer/Footer.tsx';
import App from './App.tsx'
import { Card } from './UI/Card/Card.tsx'
import { CardInsight } from './UI/Card/CardInisght.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Header />

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

    <Footer />

  </StrictMode>,
)
