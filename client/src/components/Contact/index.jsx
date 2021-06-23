import React from "react";
import "./contact.css";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
import Map from "./Map";

const index = () => {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <Container id="contact" fluid>
      <div className="title">
        <h1 className="text-gradient">Contact Us</h1>
      </div>
      <Row>
        <Col xs="12" md="6" id="form-cont">
          <Form onSubmit={sendMessage}>
            <Input type="text" name="name" placeholder="FULL NAME" />
            <Input type="email" name="email" placeholder="EMAIL" />
            <Input type="textarea" name="message" placeholder="MESSAGE" />
            <Button outline type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col id="map">
          <Map
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: "100%" }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "100%" }} />}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default index;
