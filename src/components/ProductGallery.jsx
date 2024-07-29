import useMobile from '../customHooks/useMobile';
import {men, women} from '../products'
import Product from './Product';

function ProductGallery(){
    function getRandomElements(arr, count) {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    const randomMenProducts = getRandomElements(men.products, 4);
    const randomWomenProducts = getRandomElements(women.products, 4);
    const mobile = useMobile() 
    return(
       <>
        <p className='product_gallery_title'>Best sellers</p>
        <div className="product_gallery" id="product-gallery">
                {randomMenProducts.map(product => (
                     <Product id={product.id} image={product.image} name={product.title} price={product.price}/>
                ))}
                {randomWomenProducts.map(product => (
                    <Product id={product.id} image={product.image} name={product.title} price={product.price}/>
                ))}
        </div>
        </>
    )
}
export default ProductGallery