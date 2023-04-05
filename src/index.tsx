import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './index.scss';
import CartProvider from './contexts/CartContext';
import Main from './components/Main/Main';

const App: FC = () => {
    return (
        <CartProvider>
            <Navbar />
            <Main />
        </CartProvider>
    );
};

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
