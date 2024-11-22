import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useFileChange } from "../../hooks/useFileChange";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Button from "../button";
import {
  faAdd,
  faCirclePlus,
  faGear,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Table from "../table";
import "../../styles/tab.css";


const Tab = ({ title, buttonText, columns, tabledata }) => {
  const fileInputRef = useRef(null);
  const onFileChange = useFileChange();

  // Redux states
  const uploadMessage = useSelector((state) => state.upload.uploadMessage);
  const loading = useSelector((state) => state.loading.loading);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="create">
      <div className="create-nav">
        <div className="title">{title}</div>
        <div className="action-buttons">
          <Button text={"Save as Draft"} className="button-secondary" />
          <Button text={"Save and Print"} className="button-secondary" />
          <Button
            text={"Save"}
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            className="button-primary"
          />
        </div>
      </div>
      <div className="create-subheader">
        <Button
          text={loading ? "Processing" : buttonText}
          icon={
            loading ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <FontAwesomeIcon icon={faAdd} />
            )
          }
          className="button-primary"
          onClick={handleFileUpload}
        />
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} // Hide the input
          onChange={onFileChange}
        />
        <div>
          <Button
            text={"Custom Headers"}
            icon={<FontAwesomeIcon icon={faCirclePlus} />}
            className="button-primary"
          />
          <Button
            text={"Settings"}
            icon={<FontAwesomeIcon icon={faGear} />}
            className="button-primary"
          />
        </div>
      </div>
      <div className="create-body">
        {console.log(tabledata, "Product table data log")}
        {tabledata.length > 0 ? (
          <Table tabledata={tabledata} columns={columns} />
        ) : (
          <div className="table-ready">
            {" "}
            Your table will be ready in seconds!!!{" "}
          </div>
        )}
        {uploadMessage && <div className="upload-message">{uploadMessage}</div>}
      </div>
    </div>
  );
};

export default Tab;