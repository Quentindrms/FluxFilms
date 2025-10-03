import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import './style.css';

import { Header } from './UI/Header/Header.tsx'
import { Footer } from './UI/Footer/Footer.tsx';
import { Homepage } from './UI/Views/Homepage.tsx';
import { Movies } from './UI/Views/Movies.tsx';
import { Series } from './UI/Views/Series.tsx';
import { MovieDetails } from './UI/Views/Details/MovieDetails.tsx';
import { SerieDetais } from './UI/Views/Details/SerieDetails.tsx';
import { ActorDetails } from './UI/Views/Details/ActorDetails.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={<Series />} />
        <Route path='/movie/:id' element={<MovieDetails />}/>
        <Route path='/serie/:id' element={<SerieDetais />}/>
        <Route path='/actor/:id' element={<ActorDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  </StrictMode>,
)
