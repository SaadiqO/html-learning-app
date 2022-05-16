import React from "react";
import CardItem from "./CardItem";
import "../css/Card.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Quiz1.jpg"
              text="Test Your Knowledge"
              label="Quiz"
              path="/quiz"
            />

            <CardItem
              src="/images/Tutorial.jpg"
              text="Pratice with HTML"
              label="Tutorial"
              path="/tutorial"
            />

            <CardItem
              src="/images/login.jpg"
              text="Profile"
              label="Profile"
              path="/profile"
            />
          </ul>
          <ul className="cards__items"></ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
