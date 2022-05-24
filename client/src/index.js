import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline } from '@mui/material';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <CssBaseline/>
  <App/>
  </>
);

reportWebVitals();