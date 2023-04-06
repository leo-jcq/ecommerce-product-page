import { FC, useEffect, useRef, useState } from 'react';
import { iconClose } from '../../assets/icons';
import Images from '../Images/Images';
import './MainPopup.scss';

interface MainPopupProps {
    handleClose: () => void;
}

const MainPopup: FC<MainPopupProps> = ({ handleClose }) => {
    

    return (
        <div className="mainPopUp">
            <div className="content">
                <button className="closeBtn" onClick={handleClose}>
                    {iconClose}
                </button>
                <Images popUp={false} buttons={true} />
            </div>
        </div>
    );
};

export default MainPopup;
