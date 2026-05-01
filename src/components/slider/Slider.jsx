import React from "react";
import "./slider.scss";

export default function Slider({ images }) {
  return (
    <div className="slider">
      <div className="big-image">
        <img src={images[0]} alt="" />
      </div>
      <div className="small-images">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="image house" key={index} />
        ))}
      </div>
    </div>
  );
}
