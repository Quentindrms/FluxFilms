import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router';

import './style.css';

import { Header } from './UI/Header/Header.tsx'
import { Footer } from './UI/Footer/Footer.tsx';
import { Homepage } from './UI/Views/Homepage.tsx';
import { Movies } from './UI/Views/Movies.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
      <Header />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  </StrictMode>,
)
