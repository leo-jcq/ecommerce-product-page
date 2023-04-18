import { FC, ReactNode, createContext, useContext, useState } from 'react';

const CartContext = createContext<number>(0);
const CartUpdateContext = createContext<(value: number) => void>((value: number): void => {});

export function useCart(): number {
    return useContext(CartContext);
}

export function useCartUpdate(): (value: number) => void {
    return useContext(CartUpdateContext);
}

interface CartProviderProps {
    children: ReactNode;
}

const CartProvider: FC<CartProviderProps> = ({ children }) => {
    const [cart, setCart] = useState<number>(0);

    return (
        <>
            <CartContext.Provider value={cart}>
                <CartUpdateContext.Provider value={setCart}>
                    {children}
                    </CartUpdateContext.Provider>
            </CartContext.Provider>
        </>
    );
};

export default CartProvider;
