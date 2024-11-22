import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faHeadset, faVideo } from "@fortawesome/free-solid-svg-icons";
import CardHeader from "./cardHeader";
import Button from "./button";
import infoImg from "../images/sales.webp";
import "../styles/card.css";

const Card = ({ header, subHeader, buttonText, infoData }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleButtonClick = () => {
    console.log("click");
    if (buttonText === "Create your 1st invoice") handleNavigation("/create");
  };

  return (
    <div className="card">
      <CardHeader />
      <div className="card-info">
        <img src={infoImg} alt="card" className="info-img" />
        <div className="card-body">
          <h2 className="header">{header}</h2>
          <p className="sub-header">{subHeader}</p>
          {infoData.map((item, index) => (
            <div key={index} className="info-item">
              <FontAwesomeIcon icon={item.icon} className="info-icon" />
              <span>{item.text}</span>
            </div>
          ))}
          <Button
            text={buttonText}
            icon={<FontAwesomeIcon icon={faAdd} />}
            onClick={handleButtonClick}
          />
          <div className="info-item">
            <FontAwesomeIcon icon={faHeadset} /> <span>Talk to specialist</span>
          </div>
          <div className="info-item">
            <FontAwesomeIcon icon={faVideo} />{" "}
            <span>Watch a quick video here</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
