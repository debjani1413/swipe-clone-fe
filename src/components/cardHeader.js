import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCirclePlay, faGear } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
import "../styles/cardHeader.css";

const CardHeader = () => {
  return (
    <div className="card-header">
      <div className="head">
        <span>Sales</span>
        <FontAwesomeIcon icon={faCirclePlay} className="play" />
      </div>
      <Button text={"Documents"} icon={<FontAwesomeIcon icon={faGear} />} />
      <Button text={"Create Invoice"} icon={<FontAwesomeIcon icon={faAdd} />} />
    </div>
  );
};

export default CardHeader;
