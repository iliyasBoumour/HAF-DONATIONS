import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import Project from "../../components/Projects/project";
import "./projects.css";
import { data } from "../../projects";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="projects">
      <div className="caption">
        <h1 className="text-gradient">All Our Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae beatae at, delectus asperiores harum ullam nulla aperiam
          laborum atque eligendi id nesciunt quam dicta a impedit. Magnam, nulla
          dicta?
        </p>
      </div>
      <div className="content">
        <Row>
          {data.map((pr) => (
            <Col xs="12" lg="6">
              <Project key={pr._id} {...pr} page={true} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Index;
