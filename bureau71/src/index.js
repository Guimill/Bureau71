import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/style/css/style.css';
import Root from './routes/root';
import Index from './routes/index';
import Error from './routes/error';
import Blog from './components/content/blog';
import Contact from './components/content/contact';
import Prestations from './components/content/prestation';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
              path: "prestations",
              element: <Prestations />,
            },
            {
              path: "contact",
              element: <Contact />,
            },
            {
              path: "blog",
              element: <Blog />,
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);