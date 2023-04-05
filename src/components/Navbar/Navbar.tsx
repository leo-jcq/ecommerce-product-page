import { FC, useRef } from 'react';
import imageAvatar from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import Cart from '../Cart/Cart';
import { iconClose, iconMenu } from '../../assets/icons';
import './Navbar.scss';

const Navbar: FC = () => {
    const menuRef = useRef<HTMLUListElement>(null);

    const handleNavChange = ():void => {
        menuRef.current?.classList.toggle('open');
    }

    return (
        <nav>
            <div className="left">
                <button className="openBtn" onClick={handleNavChange}>{iconMenu}</button>
                <div className="logo">
                    <img src={logo} alt="sneakers" />
                </div>
                <ul ref={menuRef}>
                    <li className="closeBtn" onClick={handleNavChange}>{iconClose}</li>
                    <li>
                        <a href="#">Collections</a>
                    </li>
                    <li>
                        <a href="#">Men</a>
                    </li>
                    <li>
                        <a href="#">Women</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="right">
                <Cart />
                <img src={imageAvatar} alt="Avatar" className="avatar" />
            </div>
        </nav>
    );
};

export default Navbar;
