import React from "react";
import { listData } from "../../lib/dummydata.js";
import Filter from "../../components/filter/Filter";
import Listcard from "../../components/listcard/Listcard";
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
      <div className="map-container">map</div>
    </div>
  );
}
