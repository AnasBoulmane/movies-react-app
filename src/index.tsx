import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr'
import { BrowserRouter } from "react-router-dom";
import './assets/styles/tailwind.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const fetcher = (resource: string, init: any) => fetch(`https://api.themoviedb.org/3${resource}`, {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_NOT_SECRET_TOKEN}`,
    ...(init?.headers || {})
  },
  ...init
}).then(res => res.json())

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig
      value={{
        fetcher,
        refreshInterval: 5 * 60 * 1000,
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
