import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/index.js';

export function MainLayout() {
    return (
        <>
            <div className="max-w-full">
                <Header />
                <main className="container max-w-7xl mx-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
