import { FC } from 'react';
import imageAvatar from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import Cart from '../Cart/Cart';
import './Navbar.scss';

const Navbar: FC = () => {
    return (
        <nav>
            <div className="left">
                <div className="logo">
                    <img src={logo} alt="sneakers" />
                </div>
                <ul>
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
