import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
