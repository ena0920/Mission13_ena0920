import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBanner from './MovieCollection';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Podcast />
  </React.StrictMode>,
);

function Podcast() {
  return (
    <>
      <TopBanner saying="Joel Hilton's Movie Mania - Podcast" />

      <p>
        Check out Joel's podcast <a href="https://baconsale.com/">Here</a>
      </p>
    </>
  );
}
