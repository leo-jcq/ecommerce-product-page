import { FC, useState } from 'react';
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

    const handleNextImage = () => {
        if (imageIndex === 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    };

    const handlePrevImage = () => {
        if (imageIndex === images.length - 1) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    };

    const handlePopUpChange = () => {
        if (popUp) {
            setOpen(!open);
        }
    };

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
                    <div className="thumbnail">
                        <img
                            src={src}
                            alt={'Image ' + (index + 1)}
                            onClick={() => setImageIndex(index)}
                        />
                    </div>
                ))}
            </div>
            {popUp && <MainPopup handleClose={handlePopUpChange} />}
        </div>
    );
};

export default Gallery;
