import { FC } from 'react';
import './Infos.scss';
import { iconCart, iconMinus, iconPlus } from '../../assets/icons';
import { useCart, useCartUpdate } from '../../contexts/CartContext';

const Infos: FC = () => {
    const nbProducts = useCart(),
        cartUpdate = useCartUpdate();

    const handleAddToCart = () => !nbProducts && cartUpdate(1);

    const handleMinus = () => nbProducts > 0 && cartUpdate(nbProducts - 1);

    const handlePlus = () => cartUpdate(nbProducts + 1);

    return (
        <div className="infos">
            <p className="company">SNEAKER COMPANY</p>
            <p className="product-name">Fall Limited Edition Sneakers</p>
            <p className="description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="price">
                <p>$125.00</p>
                <span>50%</span>
            </div>
            <p className="originalPrice">$250.00</p>

            <div className="buttons">
                <div className="controls">
                    <button className="minus" onClick={handleMinus}>
                        {iconMinus}
                    </button>
                    <span className="nbProducts">{nbProducts}</span>
                    <button className="plus" onClick={handlePlus}>
                        {iconPlus}
                    </button>
                </div>
                <button className="addToCart" onClick={handleAddToCart}>
                    {iconCart}
                    <span className="text">Add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default Infos;
