import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./mappin.scss";
import { Link } from "react-router-dom";

export default function Mappin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popup-container">
          <img src={item.img} alt="house" />
          <div className="text-container">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}
