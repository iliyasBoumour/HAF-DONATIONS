import React from "react";
import { Container, Row } from "reactstrap";
import "./partners.css";
import Partner from "./partner";

const index = () => {
  return (
    <Container id="partners" fluid={true}>
      <div className="title">
        <h1 className="text-gradient">Our Corporate Partners</h1>
      </div>
      <Row className="part-desc">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          expedita. Ducimus voluptate ipsum atque veniam dolor nostrum
          quibusdam! Asperiores facilis modi officia fugit ipsum harum eum magni
          error consequatur! Cumque!
        </p>
      </Row>
      <Row>
        <div className="part-cont">
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
          <Partner />
        </div>
      </Row>
    </Container>
  );
};

export default index;
