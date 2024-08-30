import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import './index.css'; 
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
    ],
  },
]);
console.log(router);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);



