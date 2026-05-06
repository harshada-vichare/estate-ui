import React from "react";
import "./singlepage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

export default function SinglePage() {
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images}></Slider>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="location pin" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="list-vertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="feature-text">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="pet" />
              <div className="feature-text">
                <span>Pet Policy</span>
                <p>Pets allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="fee" />
              <div className="feature-text">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="size" />
              <span>80sqm(861sqft)</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="bed" />
              <span>2 beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="bathroom" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="list-horizontal">
            <div className="feature">
              <img src="/school.png" alt="school" />
              <div className="feature-text">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="bus" />
              <div className="feature-text">
                <span>Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="restaurant" />
              <div className="feature-text">
                <span>Restaurant</span>
                <p>200m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="map-container">
            <Map items={[singlePostData]}></Map>
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" /> Send a message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
