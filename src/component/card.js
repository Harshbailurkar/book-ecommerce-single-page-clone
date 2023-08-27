import React from "react";
import star from "./images/Star.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.items.img} alt="img1" />

      {props.items.stock === 0 && <span className="stock">SoldOut</span>}
      {props.items.stock !== 0 && props.items.country === "online" && (
        <span className="online">*</span>
      )}
      <div className="rating">
        <img className="card-img" src={star} alt="" />
        <p>
          <span>{props.items.rating}</span>
          <span className="count">
            ({props.items.count}) <b>.</b>
          </span>
          <span className="count">{props.items.country}</span>
        </p>
      </div>
      <p>{props.items.name}</p>
      <p>
        <b>from Rs.{props.items.Rs} </b>/person
      </p>
    </div>
  );
}
