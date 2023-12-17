import React from "react";
import { Container } from "react-bootstrap";

const Backdrop = () => {
  return (
    <Container
      fluid
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
        backdropFilter: "blur(5px)",
        zIndex: 998,
      }}
    >
      <div
        className="content bg-white d-flex flex-column justify-content-center align-items-center"
        style={{
          height: "200px",
          width: "300px",
          boxShadow: "0px 0px 2px black",
        }}
      >
        <div className="content-body ">
          <h4 className="text-center">
            <i className="fa fa-check-circle text-primary"></i>
          </h4>
          <p>Submitted</p>
        </div>
      </div>
    </Container>
  );
};

export default Backdrop;
