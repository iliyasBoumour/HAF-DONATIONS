import React from "react";
import "./about.css";
import { Container, Row, Col, Button } from "reactstrap";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Slides from "./Slides";

const index = () => {
  return (
    <div id="about">
      <Container id="about-us" fluid="lg">
        <div className="title">
          <h1 className="text-gradient">About Us</h1>
        </div>
        <Row>
          <Col xs="12" sm="10" md="5" lg="6" className="about">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <Button outline>Read More</Button>
          </Col>
          <Col xs="12" sm="9" md="6" lg="5" className="slides">
            <Slides />
          </Col>
        </Row>
      </Container>
      <div className="stat">
        <div>
          <AiOutlineDollarCircle fontSize="4.5rem" color="#fff" />
          <h3>$300M</h3>
          <h5>Dollars</h5>
        </div>
        <div>
          <FiUsers fontSize="4.5rem" color="#fff" />
          <h3>35.000</h3>
          <h5>Donors</h5>
        </div>
        <div>
          <AiOutlineFundProjectionScreen fontSize="4.5rem" color="#fff" />
          <h3>3.000</h3>
          <h5>Projects</h5>
        </div>
      </div>
    </div>
  );
};

export default index;
