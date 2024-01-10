import { useLoaderData } from "react-router-dom";

import './style.css'
import { useEffect } from "react";

const ZoomImage = () => {
    const image = useLoaderData();
    const { productImage } = image;


    useEffect(() => {
        const handleMouseMove = (e) => {
          const size = e.target.getBoundingClientRect();
          const x = size.x;
          const y = size.y;
          const width = size.width;
          const height = size.height;
    
          const horizontal = (e.clientX - x) / width * 100;
          const vertical = (e.clientY - y) / height * 100;
    
          e.target.style.setProperty('--x', horizontal + '%');
          e.target.style.setProperty('--y', vertical + '%');
        };
    
        const elements = document.querySelectorAll('.image');
    
        const handleMouseEnter = (e) => {
          e.target.addEventListener('mousemove', handleMouseMove);
        };
    
        const handleMouseLeave = (e) => {
          e.target.removeEventListener('mousemove', handleMouseMove);
        };
    
        elements.forEach((elem) => {
          elem.addEventListener('mouseenter', handleMouseEnter);
          elem.addEventListener('mouseleave', handleMouseLeave);
        });
    
        // Clean up event listeners when the component is unmounted
        return () => {
          elements.forEach((elem) => {
            elem.removeEventListener('mouseenter', handleMouseEnter);
            elem.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []); 
    return (
        <div>
            <div className="image">
                <img src={productImage} alt="" />
            </div>
           
           
        </div>
    );
};

export default ZoomImage;