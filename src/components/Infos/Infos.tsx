import { FC } from 'react';
import './Infos.scss';
import { iconCart } from '../../assets/icons';

const Infos: FC = () => {

    const handleAddToCart = () => {
        // TODO: si pas chaussure 0 -> ajouter 1
    }

    const handleMinus = () => {
        // TODO: -1 chaussure (min 0)
    }

    const handlePlus = () => {
        // TODO: +1 chaussure
    }

    return (
        <div className="infos">
            <p className="company">SNEAKER COMPANY</p>
            <p className="product-name">Fall Limited Edition Sneakers</p>
            <p className="description">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <p className="price">
                $125.00 <span className="discount">50%</span>
            </p>
            <p className="original-price">$250.00</p>

            <div className="buttons">
                <button className="addToCart" onClick={handleAddToCart}>
                    {iconCart}
                    <span className="text">Add to cart</span>
                </button>
            </div>
        </div>
    );
};

export default Infos;
