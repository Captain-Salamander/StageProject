import React, { useRef } from "react";
import "../styles/AboutUs.scss";
import Picture1 from "../assets/aboutUs/pic1.jpg";
import Picture2 from "../assets/aboutUs/pic2.webp";
import Card from "../components/Card";

export default function AboutUs() {
  const ourStoryRef = useRef(null);
  const qualityRef = useRef(null);
  const stayConnectedRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="main-row">
        <p>Welcome to Грация</p>
        <div className="second-row">
          <ul>
            <li>
              <a
                href="#ourStory"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(ourStoryRef);
                }}
              >
                <p>Our Story</p>
              </a>
            </li>
            <li>
              <a
                href="#quality"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(qualityRef);
                }}
              >
                <p>Quality and Craftsmanship</p>
              </a>
            </li>
            <li>
              <a
                href="#iconsFooter"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(stayConnectedRef);
                }}
              >
                <p>Stay Connected</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <Card
          image={Picture1}
          title={"Our Story"}
          text={
            " Founded with a passion for fashion and a vision to redefine elegance, Grace has grown from a small boutique to a renowned name in the fashion industry. Our journey began in the vibrant streets of Sofia, where our love for design and quality craftsmanship inspired us to create a brand that stands for sophistication and grace."
          }
        >
        </Card>
        <section id="quality" ref={qualityRef}>
          <div className="row second">
            <div className="img">
              <img className="img-fluid" src={Picture2} alt="Photo 2" />
            </div>
            <div className="info">
              <h2>Quality and Craftsmanship</h2>
              <p>
                Quality is at the heart of everything we do. We source the
                finest fabrics and employ skilled artisans to ensure that every
                piece meets the highest standards of craftsmanship. From
                luxurious jackets to elegant shirts and versatile shorts, each
                item in our collection is meticulously crafted to offer you the
                perfect blend of comfort and style.
              </p>
            </div>
          </div>
        </section>
        <section id="iconsFooter" ref={stayConnectedRef}>
          {/* Add content for the Stay Connected section here */}
        </section>
      </div>
    </>
  );
}
