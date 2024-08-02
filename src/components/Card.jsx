import { useState } from "react";
import { useNavigate } from "react-router";

export default function Card({ image, title, text}) {
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();
  console.log(flip);
  return (
    <div
      className="card"
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
      onClick={() => setFlip(!flip)}
   
    >
      <div className="content">
        <div className={`front ${flip ? "" : "visible"}`} style={{backgroundImage:`url(${image})`}}>
          {/* <div className="image">
            <img src={image} alt="" />
          </div> */}
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
        <div className={`back ${flip ? "visible" : ""}`}>
          <div className="text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}