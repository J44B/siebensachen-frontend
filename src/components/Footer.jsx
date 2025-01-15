import { useNavigate } from 'react-router';
import gear from '../assets/icons/gear.svg';
import home from '../assets/icons/house-simple.svg';
import create from '../assets/icons/plus-circle.svg';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="border-t border-gray-500 bg-[#B7E0FF]">
            <div
                id="footer-buttons"
                className="flex flex-row justify-between align-middle gap-2 m-2 "
            >
                <button
                    id="home-button"
                    className="inline-block text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => navigate('/')}
                >
                    <img src={home} alt="home" width={32} height={32} />
                </button>

                <button
                    id="administration-button"
                    className="inline-block text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => navigate('/administration')}
                >
                    <img
                        src={gear}
                        alt="administration"
                        width={32}
                        height={32}
                    />
                </button>

                <button
                    id="create-button"
                    className="inline-block text-gray-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    onClick={() => navigate('/events/create')}
                >
                    <img src={create} alt="create new" width={32} height={32} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;
