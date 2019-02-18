import React from 'react';
import './scrapbook.css';
import ScrapbookImage from './scrapbook_images';
import imageData from './image_data';

export default props =>{
    const images = imageData.map((img, index) => {

        return <ScrapbookImage key={index} about={img}/>
    });

    return(
        <div className="scrapbook-container">
            {images}
        </div>
    )
}