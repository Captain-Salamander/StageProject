import { useState } from "react";
import { useNavigate } from "react-router";

export default function Card({ image, title, text}) {
  const [flip, setFlip] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      onMouseOver={() => setFlip(true)}
      onMouseOut={() => setFlip(false)}
   
    >
      <div className="content">
        <div className={`front ${flip ? "" : "visible"}`}>
          <div className="image">
            <img src={image} alt="" />
          </div>
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