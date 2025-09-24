import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import './style.css';

import { Button } from './UI/Button/Buttons.tsx'
import { Header } from './UI/Header/Header.tsx'
import { Footer } from './UI/Footer/Footer.tsx';
import { Card } from './UI/Card/Card.tsx'
import { CardInsight } from './UI/Card/CardInisght.tsx';
import { Homepage } from './UI/Views/Homepage.tsx';
import { Series } from './UI/Views/Series.tsx';
import { Movies } from './UI/Views/Movies.tsx';

import { fetcher } from './core/fetcher.ts';

const data = fetcher();
console.log(data); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  </StrictMode>,
)
