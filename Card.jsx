import React from "react";
import "./Card.css";

function Card(propes) {
  return (
    <div className="cards">
      <div className="card">
        <img src={propes.img} alt="img"></img>
        <div className="property">
          <h2>{propes.name}</h2>
          <span>{propes.color}</span>
          <div className="button">
            <a href={propes.link}name="_blank">
              <button className="buttons">{propes.button}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
