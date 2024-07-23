import { forwardRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import {Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const Hero = forwardRef((props,ref) =>{
    const navigate = useNavigate();
    const [onWomenHover, setOnWomenHover] = useState(false)
    const [onMenHover, setOnMenHover] = useState(false)

    return(
        <div ref={ref}>
            {window.screen.width > 1200 ? <div className="hero">
                <div className={`Women ${onWomenHover ? "hover" : ""}`} onMouseEnter={()=>{setOnWomenHover(true)}} onMouseLeave={()=>{setOnWomenHover(false)}}  onClick={() => {navigate("/women")}}>
                    <a href="#women" className="nav-link">Women</a>
                
                </div>
                <div className={`Men ${onMenHover ? "hover" : ""}`} onMouseEnter={()=>{setOnMenHover(true)}} onMouseLeave={()=>{setOnMenHover(false)}} onClick={() => {navigate("/men")}}>
                    <a href="#men" className="nav-link">Men</a>
        
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
                        <a href="#women" className="nav-link">Women</a>
                    
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`Men ${onMenHover ? "hover" : ""}`} onMouseEnter={()=>{setOnMenHover(true)}} onMouseLeave={()=>{setOnMenHover(false)}} onClick={() => {navigate("/men")}}>
                        <a href="#men" className="nav-link">Men</a>
            
                    </div>
                </SwiperSlide>
            </Swiper>
                }
        </div>
    )

})
export default Hero 