import React from "react";
import ListCard from "../listcard/Listcard";
import { listData } from "../../lib/dummydata";
import "./list.scss";

export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <ListCard key={item.id} item={item} />
      ))}
    </div>
  );
}
