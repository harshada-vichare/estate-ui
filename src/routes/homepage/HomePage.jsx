import React from "react";
import "./homepage.scss";
import SearchBar from "../../components/searchbar/SearchBar";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="text-container">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & get your dream place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            deleniti sint nobis ipsa, quidem aperiam saepe, quasi eum ipsum
            neque accusamus. Corporis maxime quae numquam temporibus, officia
            quam ullam sunt.
          </p>
          <SearchBar></SearchBar>
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="img-container">
        <img src="/bg.png" alt="image" />
      </div>
    </div>
  );
}
