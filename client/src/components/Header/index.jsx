import React from "react";
import "./header.css";
import { Container, Row, Col, Button } from "reactstrap";

const index = () => {
  return (
    <Container id="home" className="landing" fluid={true}>
      <Row>
        <Col xs="8" lg="5" className="text">
          <h1 className="text-gradient animate__animated animate__backInLeft">
            EMOTION IS GREEN
          </h1>
          <p className="animate__animated animate__backInLeft">
            Is the spring coming?’ he said. ‘What is it like?’ … ‘It is the sun
            shining on the rain and the rain falling on the sunshine, and things
            pushing up and working under the earth.
          </p>
          <Button className=" animate__animated animate__backInUp" outline>
            Donate Now
          </Button>
        </Col>
        <Col
          lg="6"
          xs="12"
          sm="10"
          className="image animate__animated animate__backInRight"
        ></Col>
      </Row>
    </Container>
  );
};

export default index;
