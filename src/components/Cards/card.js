import React from "react";
import "./styles.css";
import hotel from "../../assets/hotels/hotel-1.jpeg";

function Card({ card }) {
  return <div>
    <img src={hotel} className="card-img" />
  </div>;
}

export default Card;
