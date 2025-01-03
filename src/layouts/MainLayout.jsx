import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components/indexComponents.js';

export function MainLayout() {
    return (
        <>
            <div className="flex flex-col h-screen justify-between max-w-full bg-[#F8EDED]">
                <Header />
                <main
                    id="main-site-container"
                    className="max-w-5xl mx-auto my-4"
                >
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
