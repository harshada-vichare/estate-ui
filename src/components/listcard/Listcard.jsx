import React from "react";
import "./listcard.scss";
import { Link } from "react-router-dom";

export default function Listcard({ item }) {
  return (
    <div className="listcard">
      <Link to={`/${item.id}`} className="image-container">
        <img src={item.img} alt="image" loading="lazy" />
      </Link>
      <div className="text-container">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="./pin.png" alt="location" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="bedroom" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="bathroom" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="save" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
