import React from "react";
import { Container, Row, Button } from "reactstrap";

import { Link } from "react-router-dom";
import "./projects.css";
import Slider from "./slider";

const Index = () => {
  return (
    <Container id="projects" fluid="lg">
      <div className="title">
        <h1 className="text-gradient">Projects</h1>
        <Link to="/projects">
          <Button outline>View All</Button>
        </Link>
      </div>
      <Row>
        <Slider />
      </Row>
    </Container>
  );
};

export default Index;
