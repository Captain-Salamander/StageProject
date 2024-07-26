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
                                    <p>Men</p>
                                </a>
                            </li>
                            <li>
                                <a href="/women" >
                                    <p>Women</p>
                                </a>
                            </li>
                            <li>
                                <a href="/aboutus">
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
                                <p>Contact us</p>
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
                                <a href="" target="_blank">
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