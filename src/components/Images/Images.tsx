import { FC, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import ImageProduct1 from '../../assets/image-product-1.jpg';
import ImageProduct2 from '../../assets/image-product-2.jpg';
import ImageProduct3 from '../../assets/image-product-3.jpg';
import ImageProduct4 from '../../assets/image-product-4.jpg';
import './Images.scss';
import MainPopup from '../MainPopup/MainPopup';
import { iconNext, iconPrevious } from '../../assets/icons';

const images = [
    { src: ImageProduct1, alt: 'Image 1' },
    { src: ImageProduct2, alt: 'Image 2' },
    { src: ImageProduct3, alt: 'Image 3' },
    { src: ImageProduct4, alt: 'Image 4' }
];

interface ImagesProps {
    popUp?: boolean;
    buttons?: boolean;
}

const Images: FC<ImagesProps> = ({ popUp = true, buttons = false }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handlePopUp = (): void => {
        setOpen(!open);
    };

    const [currentImage, setCurrentImage] = useState<number>(0);

    const handleImageClick = useCallback((e: MouseEvent<HTMLDivElement>): void => {
        if (e.currentTarget.dataset.id) {
            setCurrentImage(parseInt(e.currentTarget.dataset.id));
        }
    }, []);

    const handlePrevImage = (): void => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    };

    const handleNextImage = (): void => {
        if (currentImage < images.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    };

    return (
        <div className="images">
            <div className="mainImage">
                {buttons && (
                    <button className="prevBtn" onClick={handlePrevImage}>
                        {iconPrevious}
                    </button>
                )}
                <img src={images[currentImage].src} alt="Product" onClick={handlePopUp} />
                {buttons && (
                    <button className="nextBtn" onClick={handleNextImage}>
                        {iconNext}
                    </button>
                )}
            </div>
            <div className="imageList">
                {images.map((image: { src: string; alt: string }, index: number) => (
                    <div
                        key={index}
                        onClick={handleImageClick}
                        data-id={index}
                        className={'image' + (currentImage == index ? ' active' : '')}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {popUp && open && <MainPopup handleClose={handlePopUp} />}
        </div>
    );
};

export default Images;
