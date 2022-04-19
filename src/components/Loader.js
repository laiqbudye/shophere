import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
        top: "50%",
        left: "50%",
        position: "absolute",
        zIndex: 99
      }}
    ></Spinner>
  );
};

export default Loader;
