import { FC, memo, useState } from 'react';
import { iconNext, iconPrevious } from '../../assets/icons';
import ImageProduct1 from '../../assets/image-product-1.jpg';
import ImageProduct2 from '../../assets/image-product-2.jpg';
import ImageProduct3 from '../../assets/image-product-3.jpg';
import ImageProduct4 from '../../assets/image-product-4.jpg';

import MainPopup from '../MainPopup/MainPopup';
import './Gallery.scss';

const images = [ImageProduct1, ImageProduct2, ImageProduct3, ImageProduct4];

interface GalleryProps {
    popUp?: boolean;
}

const Gallery: FC<GalleryProps> = ({ popUp = true }) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const handlePrevImage = () =>
        setImageIndex(imageIndex === 0 ? images.length - 1 : imageIndex - 1);

    const handleNextImage = () => setImageIndex((imageIndex + 1) % images.length);

    const handlePopUpChange = () => popUp && setOpen(!open);

    return (
        <div className="gallery">
            <div className="mainImage">
                <button className="prevBtn" onClick={handlePrevImage}>
                    {iconPrevious}
                </button>
                <img
                    src={images[imageIndex]}
                    alt={'Image ' + (imageIndex + 1)}
                    onClick={handlePopUpChange}
                />
                <button className="nextBtn" onClick={handleNextImage}>
                    {iconNext}
                </button>
            </div>
            <div className="thumbnails">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={'thumbnail' + (imageIndex == index ? ' active' : '')}
                        onClick={() => setImageIndex(index)}>
                        <img src={src} alt={'Image ' + (index + 1)} />
                    </div>
                ))}
            </div>
            {popUp && open && <MainPopup handleClose={handlePopUpChange} />}
        </div>
    );
};

export default memo(Gallery);
