import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/index.js';

export function MainLayout() {
    return (
        <>
            <div className="flex flex-col h-screen justify-between max-w-full">
                <Header />
                <main className="container max-w-7xl mx-auto my-2">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
