import { useState,useEffect } from "react";
import image from "../assets/header/profile.png"
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";

function Header(){
    const [sticky,setSticky]=useState(false);
    const [openBurger, setOpenBurger]=useState(false);
    const {pathname}= useLocation();
    const url = window.location.pathname
    const { ref: heroRef, inView } = useInView({
      threshold: 0,
    });

    useEffect(() => {
      const handleScroll = () => {  
       const hightelem = document.getElementById("hero")
       let height;
        if (hightelem) {
          height = hightelem.offsetHeight
        } else {
          height = 100
        }
        if (window.scrollY >= height) {
          setSticky(true);
          console.log(true);
        } else {
          setSticky(false);
        }
      };
      
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return(
      <>
       <div ref={heroRef}></div>
        <header className={`${sticky ? "sticky" : ""} ${url==="/" ? "home" : ""}`}>
            <div
        className={`burger-menu ${openBurger ? "open" : ""}`}
        onClick={() => setOpenBurger(!openBurger)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`burger-wrap ${openBurger ? "open" : ""}`}>
        <div className={`burger-content` }>
            <ul className="burger-navigation">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/men">Men</a>
            </li>
            <li>
                <a href="/women">Women</a>
            </li>
            <li>
                <a href="/about-us">About us</a>
            </li>
            </ul>
            </div> 
      </div>
            <nav className={"navigation"}>
                <div className="navigation-wrap">
                <div className="header">
                    <a href="/">
                        <h1>Грация</h1>
                    </a>
                </div>               
                </div>
            </nav>
            <div className="profile-picture">
                <a href="/" >
                     <img src={image} alt='profile picture'/>
                </a>
            </div>
        </header>
     </>
    );
}

export default Header