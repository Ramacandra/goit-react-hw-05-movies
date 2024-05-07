import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
