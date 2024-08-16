import { forwardRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import useMobile from "../customHooks/useMobile";
import Men from '../assets/hero/herpMen2.webp'
import Women from '../assets/hero/heroWomen1.webp'

const Hero = forwardRef((props,ref) =>{
    const navigate = useNavigate();
    const [onWomenHover, setOnWomenHover] = useState(false)
    const [onMenHover, setOnMenHover] = useState(false)
    const mobile = useMobile() 
    return(
        <div ref={ref}>
            { !mobile ? <div className="hero" id="hero">
                <div className='Women'>
                    <div className='hero-images' onMouseEnter={()=>{setOnWomenHover(true)}} onMouseLeave={()=>{setOnWomenHover(false)}}  onClick={() => {navigate("/women")}}>
                    <a href="#women" className={`nav-link ${onWomenHover ? "hover" : ""}`}>Women</a>
                        <img className='hero-img' src={Women} alt="Women_picture"></img>
                        <div className={`image-hover-style ${onWomenHover ? "hover" : ""}`}></div>
                    </div>
                </div>
                <div className='Men' >
                    <div className='hero-images' onMouseEnter={()=>{setOnMenHover(true)}} onMouseLeave={()=>{setOnMenHover(false)}} onClick={() => {navigate("/men")}}>
                    <a href="#men" className={`nav-link ${onMenHover ? "hover" : ""}`}>Men</a>
                        <img className='hero-img 'src={Men} alt="Men_picture"></img>
                        <div className={`image-hover-style ${onMenHover ? "hover" : ""}`}></div>
                    </div>
                </div>
            </div>
            :
            <Swiper 
                slidesPerView={1}
                initialSlide={0}
                className="hero mobile"
            >
                <SwiperSlide>
                    <div className={`Women ${onWomenHover ? "hover" : ""}`} onMouseEnter={()=>{setOnWomenHover(true)}} onMouseLeave={()=>{setOnWomenHover(false)}}  onClick={() => {navigate("/women")}}>
                    <div className="hero-images">
                    <a href="#women" className={`nav-link ${onWomenHover ? "hover" : ""}`}>Women</a>
                        <img className='hero-img' src={Women} alt="Women_picture"></img>
                        <div className={`image-hover-style ${onWomenHover ? "hover" : ""}`}></div>
                    </div>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`Men ${onMenHover ? "hover" : ""}`} onMouseEnter={()=>{setOnMenHover(true)}} onMouseLeave={()=>{setOnMenHover(false)}} onClick={() => {navigate("/men")}}>
                    <div className="hero-images">
                    <a href="#men" className={`nav-link ${onMenHover ? "hover" : ""}`}>Men</a>
                        <img className='hero-img 'src={Men} alt="Men_picture"></img>
                        <div className={`image-hover-style ${onMenHover ? "hover" : ""}`}></div>
                    </div>
            
                    </div>
                </SwiperSlide>
            </Swiper>
                }
        </div>
    )

})
export default Hero 