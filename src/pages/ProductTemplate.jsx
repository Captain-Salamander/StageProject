import { useEffect, useState } from "react";
import "../styles/ProductTemplate.scss";
import DownArrow from "../assets/productTemplate/down-arrow.png"
import { useParams } from "react-router-dom";
import {men, women} from '../products';
import Product from "../components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "../styles/Product.scss";

export default function ProductTemplate(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const [gender, setGender] = useState('');
    const [recommended, setRecommended] = useState([]);
    const [loading, setLoading] = useState(true);
    function getRandomElements(arr, count) {
        const shuffled = arr
        .filter((prod) => 
            prod?.id !== Number(id)
        )
        .sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    useEffect(() => {
        setLoading(true);
        setGender(men.products.find((prod) => Number(id) === Number(prod?.id)) ? 'men' : 'women');
        setProduct(men.products.find((prod) => Number(id) === Number(prod?.id)) || women.products.find((prod) => Number(id) === Number(prod?.id)));
        setLoading(false);
    }, [id]);

    useEffect(() => {
        gender !== '' && setRecommended(gender === 'men' ? getRandomElements(men.products,4) : getRandomElements(women.products,4));
    },[id, gender]);

    console.log(recommended)

    const[selecSize,setSelecSize]=useState("M-L");
    const[showProductInfo,setShowProductInfo]=useState(false);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <>
    <section className="main-content">
        <div className="product-images">
            {product?.image?.map((img, i) => {
                return <div className="product-image" key={i}>
                <img src={img} alt=""></img>
            </div>
            })}
        </div>
        <div className="product-info-wrap">
            <div className="product-info">
                <p className="product-name">{product.title}</p>
                <p className="product-price">${product.price}</p>
                <div className="size-container">
                    <ul>
                        <li>
                            <div className={`size-button ${selecSize === "XS-S" ? "active" : "" }`} onClick={()=>setSelecSize("XS-S")}>XS/S</div>
                        </li>
                        <li>
                            <div className={`size-button ${selecSize === "M-L" ? "active" : "" }`} onClick={()=>setSelecSize("M-L")}>M/L</div>
                        </li>
                        <li>
                            <div className={`size-button ${selecSize === "XL-XXL" ? "active" : "" }`} onClick={()=>setSelecSize("XL-XXL")}>XL/XXL</div>
                        </li>
                        
                    </ul>
                </div>
                <button className="add-to-cart-button">Add to cart</button>
                <div className={`product-details ${showProductInfo ? "rotate" : "derotate"}`} onClick={()=>setShowProductInfo(!showProductInfo)}>
                    <p>Product details</p>
                    <div className="arrow" ><img src={DownArrow} alt="DownArrow"></img></div> 
                </div>
                <div className={`product-details-text ${showProductInfo ? "show-info" : "hide-info"}`} >
                    <p>Introducing the Contrast Stitch Carpenter Jacket in Mid Blue. Crafted from high quality, denim fabric this Jacket embodies both style and durability. The wide front pockets offer convenience, while the cross-over pleated design elevates the aesthetic appeal. Pair with the Contrast Stitch Carpenter Jean in Mid Blue for a completed ensemble.<br/><br/>
                        &#x2022; Relaxed Silhouette <br/>
                        &#x2022; Hammered Metal Silver Buttons<br/>
                        &#x2022; Wide-set Front Pockets<br/>
                        &#x2022; Cross-over Pleated Design to Back<br/>
                        &#x2022; Embossed Manière De Voir Eiffel to Centre Back<br/>
                        &#x2022; 100% Cotton<br/><br/>
                        Always check the care label for wash instructions.<br/>
                    </p>
                </div>
            </div>
        </div>
    </section>
   <section className="recommended">
        <div className="first-row">
            <p>Recommended for you</p>
        </div>
        {window.screen.width > 1200 ? 
            <div className="recommended-products">
                { recommended.map((rec) => {
                    console.log(rec.image)
                    return <Product id={rec.id} image={rec.image} name={rec.title} price={rec.price} />}) 
                }
            </div>
        : 
            <Swiper 
                spaceBetween={10}
                slidesPerView={1.5}
                centeredSlides={true}
                initialSlide={1}
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination, Scrollbar]}
                loop

                className="recommended-products"
            >
                { recommended.map((rec) => {
                    return <SwiperSlide><Product id={rec.id} image={rec.image} name={rec.title} price={rec.price}/></SwiperSlide>}) 
                }
            </Swiper>
        }
        
    </section>
    
    </>
}
