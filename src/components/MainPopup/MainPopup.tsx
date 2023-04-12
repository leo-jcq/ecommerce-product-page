import { FC } from 'react';
import { iconClose } from '../../assets/icons';
import Gallery from '../Gallery/Gallery';
import './MainPopup.scss';

interface MainPopupProps {
    handleClose: () => void;
}

const MainPopup: FC<MainPopupProps> = ({ handleClose }) => {

    return (
        <div className="main-popup">
            <div className="content">
                <button className="closeBtn" onClick={handleClose}>
                    {iconClose}
                </button>
                <Gallery popUp={false} />
            </div>
        </div>
    );
};

export default MainPopup;
