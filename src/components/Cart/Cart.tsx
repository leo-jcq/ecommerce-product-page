import { FC, useEffect, useRef, useState } from 'react';
import { iconCart, iconDelete } from '../../assets/icons';
import imageProduct1 from '../../assets/image-product-1.jpg';
import { useCart } from '../../contexts/CartContext';
import './Cart.scss';

const Cart: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const cartRef = useRef<HTMLDivElement>(null);
    const nbProducts = useCart();

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [cartRef]);

    const handleClick = (): void => {
        setOpen(!open);
    };

    return (
        <div className="cart" ref={cartRef}>
            <div
                className={'cart-icon' + (nbProducts > 0 ? ' products' : '')}
                data-nbproducts={nbProducts}
                onClick={handleClick}>
                {iconCart}
            </div>

            {open && (
                <div className="cartPopUp">
                    <div className="top">
                        <span>Cart</span>
                    </div>
                    <div className="bottom">
                        {nbProducts > 0 ? (
                            <>
                                <div className="product">
                                    <div className="image">
                                        <img src={imageProduct1} alt="Product 1" />
                                    </div>

                                    <div className="text">
                                        <span className="name">Fall Limited Edition Sneakers</span>
                                        <span className="price">
                                            $125.00 x {nbProducts}{' '}
                                            <b>${(125.0 * nbProducts).toFixed(2)}</b>
                                        </span>
                                    </div>

                                    <div className="delete">{iconDelete}</div>
                                </div>

                                <button className="checkout">Checkout</button>
                            </>
                        ) : (
                            <span className="empty">Your cart is empty.</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
