import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './MovieCollection';
import MovieList from './Movies';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <TopBanner saying="Joel Hilton's Movie Mania - Home" />
      <br />
      <nav>
        <Link to="/">Home</Link>
        <Link to="./MovieCollection.tsx">Movie Collection</Link>
        <Link to="./Podcast.tsx">Podcast</Link>
      </nav>
      <MovieList />

      <p>This is Joel Hilton's entire movie collection site!</p>
    </div>
  );
}

export default App;
