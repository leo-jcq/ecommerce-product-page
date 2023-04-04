import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './index.scss';

const App: FC = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
