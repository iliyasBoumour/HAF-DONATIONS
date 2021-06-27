import React from "react";
import { Col, Row, Button } from "reactstrap";
import "./paymentSteps.css";

const Pay = () => {
  return (
    <Row className="pay-container">
      <Col xs="12" lg="8" className="order-content">
        <h2 className="fw-bold mt-4 mb-5">Order Info</h2>
      </Col>
      <Col xs="12" lg="4" className="order-summary">
        <section className="cartTotal">
          <h2 className="fw-bold mb-5 text-gradient">Cart Total</h2>
          <div className="one-info">
            <h6 className="">projects:</h6>
            <h6 className="">3</h6>
          </div>
          <hr className="my-4" />
          <div className="one-info">
            <h6 className="">projects:</h6>
            <h6 className="">3</h6>
            <h6 className="remove">X</h6>
          </div>
          <hr className="my-4" />
          <div className="one-info">
            <h5 className="fw-bold" style={{ marginRight: "63px" }}>
              Total:
            </h5>
            <h5 className="fw-bold">135$</h5>
          </div>
          <Button outline className=" text-uppercase mt-auto fw-bold ">
            Check out
          </Button>
        </section>
      </Col>
    </Row>
  );
};

export default Pay;
