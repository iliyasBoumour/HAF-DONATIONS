import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./contact.css";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
import Map from "./Map";
import { sendEmail } from "../../actions/emailActions";
import { Alert } from "react-bootstrap";

const Contact = () => {
  const dispatch = useDispatch();
  const { loading, sent, error } = useSelector((state) => state.emailReducers);
  const [showToast, setShowToast] = useState(false);
  const [email, setEmail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  useEffect(() => {
    if (sent || error) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 5000);
    }
  }, [error, sent]);
  useEffect(() => {
    setShowToast(false);
  }, [email]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({ ...email, [name]: value });
  };
  const sendMessage = (e) => {
    e.preventDefault();
    dispatch(sendEmail(email));
    setEmail({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <Container id="contact" fluid>
      <div className="title">
        <h1 className="text-gradient">Contact Us</h1>
      </div>
      <Row>
        <Col xs="12" md="6" id="form-cont">
          {showToast && (
            <Alert variant={error ? "danger" : "success"}>
              {error ? error : "email sent successfully !"}
            </Alert>
          )}
          <Form onSubmit={sendMessage}>
            <Input
              type="text"
              onChange={handleChange}
              value={email.name}
              name="name"
              placeholder="FULL NAME"
              required
            />
            <Input
              type="text"
              onChange={handleChange}
              value={email.subject}
              name="subject"
              placeholder="SUBJECT"
            />
            <Input
              type="email"
              onChange={handleChange}
              value={email.email}
              name="email"
              placeholder="EMAIL"
              required
            />
            <Input
              type="textarea"
              onChange={handleChange}
              value={email.message}
              name="message"
              placeholder="MESSAGE"
              required
            />

            <Button outline type="submit" disabled={loading}>
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

export default Contact;
