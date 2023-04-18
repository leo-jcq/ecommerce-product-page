import { FC, useEffect, useRef } from 'react';
import { iconClose } from '../../assets/icons';
import Gallery from '../Gallery/Gallery';
import './MainPopup.scss';

interface MainPopupProps {
    handleClose: () => void;
}

const MainPopup: FC<MainPopupProps> = ({ handleClose }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
                handleClose();
            }
        };

        const timeout = setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 1);

        return () => {
            clearTimeout(timeout);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [contentRef]);

    return (
        <div className="main-popup">
            <div ref={contentRef} className="content">
                <button className="closeBtn" onClick={handleClose}>
                    {iconClose}
                </button>
                <Gallery popUp={false} />
            </div>
        </div>
    );
};

export default MainPopup;
