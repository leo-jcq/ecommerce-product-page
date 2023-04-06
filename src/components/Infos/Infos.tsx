import './Infos.scss';

const Infos = () => {
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

            
        </div>
    );
};

export default Infos;
