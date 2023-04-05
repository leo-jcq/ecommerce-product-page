import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import ImageProduct1 from '../../assets/image-product-1.jpg';
import ImageProduct2 from '../../assets/image-product-2.jpg';
import ImageProduct3 from '../../assets/image-product-3.jpg';
import ImageProduct4 from '../../assets/image-product-4.jpg';
import './Images.scss';

const Images: FC = () => {

    return (
        <div className="images">
            <div className="mainImage">
                <img src={ImageProduct1} alt="" />
            </div>
            <div className="imageList">
                <img
                    src={ImageProduct1}
                    alt="Image 1"
                />
                <img src={ImageProduct2} alt="Image 2" />
                <img src={ImageProduct3} alt="Image 3" />
                <img src={ImageProduct4} alt="Image 4" />
            </div>
        </div>
    );
};

export default Images;
