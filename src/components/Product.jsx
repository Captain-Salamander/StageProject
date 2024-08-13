import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Product({image, name, price, id}){
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(image && image[0]);

    const handleMouseEnter = () => {
        setCurrentImage(image[1]);
    };

    const handleMouseLeave = () => {
        setCurrentImage(image[0]);
    };
    return(
        <div className="product" onClick={() => {
            navigate(`/product/${id}`);
           // window.location.reload();
        }}>
            <img src={currentImage} alt='profile picture' onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} preload/>
            <p className="product-name">{name} </p>
            <p className="product-price">${price}</p>
        </div>
    )
}
export default Product