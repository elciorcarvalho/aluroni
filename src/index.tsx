import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'normalize.css';
import './index.css';
// components
import AppRouter from 'routes';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
