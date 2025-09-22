import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './style.css';

import { Button } from './UI/Button/Buttons.tsx'
import { Header } from './UI/Header/Header.tsx'
import App from './App.tsx'
import { Card } from './UI/Card/Card.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Header />

    <div className="card-wrapper">    
      <Card
      movieName='Film'
      movieGenre='Genre'
      movieReleaseDate='1997' />
      <Card
        movieName='Film'
        movieGenre='Genre'
        movieReleaseDate='1997' />
      <Card
        movieName='Film'
        movieGenre='Genre'
        movieReleaseDate='1997' />
      <Card
        movieName='Film'
        movieGenre='Genre'
        movieReleaseDate='1997' />
    </div>

  </StrictMode>,
)
