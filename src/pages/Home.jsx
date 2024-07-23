import { useRef } from 'react';
import ProductGallery from '../components/ProductGallery.jsx'
import Hero from '../components/Hero.jsx'
import "../styles/Home.scss"
import "../styles/Product.scss";

const Home = () =>{
    const heroRef = useRef(null);
    return( <>
        <Hero ref={heroRef}/>
        <ProductGallery/>
    </>
    );
}

export default Home;