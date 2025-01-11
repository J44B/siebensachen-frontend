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
    LoginPage,
    ProfilePage,
    ListPage,
    EditEventPage,
    CreateListPage,
} from './pages/indexPages.js';

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
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
            },
            {
                path: '/events/:eventId',
                element: <EventPage />,
            },
            {
                path: '/events/:eventId/edit',
                element: <EditEventPage />,
            },
            {
                path: '/events/create',
                element: <CreateEventPage />,
            },
            {
                path: '/administration',
                element: <AdministrationPage />,
            },
            { path: '/lists/:eventId/:listId', element: <ListPage /> },
            { path: '/lists/create/:eventId', element: <CreateListPage /> },
            {
                path: '/items',
                element: <ItemsPage />,
            },
            {
                path: '/categories',
                element: <CategoriesPage />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
