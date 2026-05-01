import React from "react";
import Filter from "../../components/filter/Filter";
import Listcard from "../../components/listcard/Listcard";
import Map from "../../components/map/Map.jsx";
import { listData } from "../../lib/dummydata.js";
import "./listpage.scss";

export default function ListPage() {
  const data = listData;
  return (
    <div className="listpage">
      <div className="list-container">
        <div className="wrapper">
          <Filter></Filter>
          {data.map((item) => (
            <Listcard key={item.id} item={item}></Listcard>
          ))}
        </div>
      </div>
      <div className="map-container">
        <Map items={data}></Map>
      </div>
    </div>
  );
}
