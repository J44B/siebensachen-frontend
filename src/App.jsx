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
                path: '/events/:id',
                element: <EventPage />,
            },
            {
                path: '/edit-event/:id',
                element: <EditEventPage />,
            },
            {
                path: '/new-event',
                element: <CreateEventPage />,
            },
            {
                path: '/administration',
                element: <AdministrationPage />,
            },
            { path: '/list/:id', element: <ListPage /> },
            { path: '/list/create-list', element: <CreateListPage /> },
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
