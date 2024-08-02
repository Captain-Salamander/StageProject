import Instagram from '../assets/footer/instagram(1).png'
import Facebook from '../assets/footer/facebook.png'
import Tiktok from '../assets/footer/tik-tok.png'
import Twitter from '../assets/footer/twitter.png'
import Email from '../assets/footer/envelope.png'
import Location from '../assets/footer/location.png'

function Footer(){
    return(
        <>
            <div className='social_media_container' id="iconsFooter">
                <div className="social_media_icons">
                    <ul className='list_icons'>
                        <li>
                            <a href="https://www.instagram.com/" target='_blank'>
                                <img className="img-fluid" src={Instagram} alt="instagram_icon"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target='_blank'>
                                <img className="img-fluid" src={Facebook} alt="instagram_icon"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/explor" target='_blank'>
                                <img className="img-fluid" src={Tiktok} alt="instagram_icon"></img>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/" target='_blank'>
                                <img className="img-fluid" src={Twitter} alt="instagram_icon"></img>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <footer className="footer">
                <div className='footer-elements'>
                    <div className='columnf'>
                        <ul>
                            <li>
                                <a href="/men" >
                                    <p className='top-title'>Men</p>
                                </a>
                            </li>
                            <li>
                                <a href="/women" >
                                    <p>Women</p>
                                </a>
                            </li>
                            <li>
                                <a href="/about-us">
                                    <p>About us</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='columnf'>
                        <h1>Грация</h1>
                    </div>
                    <div className='columnf'>
                        <ul>
                            <li>
                                <p className='top-title'>Contact us</p>
                            </li>
                            <li>
                                <a href="mailto:contact@grace.com" target="_blank">
                                    <div className='email-img'>
                                        <img  className="img-fluid" src={Email} alt="Photo 1"></img>
                                    </div>
                                    <p>contact@grace.com</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.google.com/maps/place/H%26M/@42.6945696,23.3207168,3a,75y,274h,92.94t/data=!3m6!1e1!3m4!1svK4bB8Az4TCq4rW3a7pQSA!2e0!7i13312!8i6656!4m16!1m9!4m8!1m0!1m6!1m2!1s0x40aa856c5021a881:0x49293a9f619fd306!2z0KHQvtGE0LjRjyDRhtC10L3RgtGK0YAsINCx0YPQuy4g4oCe0JLQuNGC0L7RiNCw4oCcIDEzLCAxMDAwINCh0L7RhNC40Y8!2m2!1d23.3209453!2d42.6944642!3m5!1s0x40aa856c5b5de98b:0xe5e134bcfabbbbcb!8m2!3d42.6945583!4d23.3204461!16s%2Fg%2F11cjjz82cx?hl=bg&coh=205409&entry=ttu" target="_blank">
                                    <div className='email-img'>
                                        <img  className="img-fluid" src={Location} alt="Photo 1"></img>
                                    </div>
                                    <p>bul.Vitosha 13, Sofia, Bulgaria</p>
                                </a>  
                            </li>
                        </ul>   
                    </div>
                </div>
                <div className='footer-secondrow'>
                    <p>Since 2024</p>
                </div>
            </footer>
        </>
    );
}

export default Footer