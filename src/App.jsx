import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';
import {
    HomePage,
    EventPage,
    AdministrationPage,
    ItemsPage,
    CategoriesPage,
    CreateEventPage,
    SignUpPage,
} from './pages/index.js';

/* 

Todos 

- add relative routes for single items etc.

*/

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/signup',
                element: <SignUpPage />,
            },
            {
                path: '/event',
                element: <EventPage />,
            },
            {
                path: '/new-event',
                element: <CreateEventPage />,
            },
            {
                path: '/administration',
                element: <AdministrationPage />,
            },
            {
                path: '/administration/items',
                element: <ItemsPage />,
            },
            {
                path: '/administration/categories',
                element: <CategoriesPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
