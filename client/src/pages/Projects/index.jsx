import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Alert, Spinner } from "reactstrap";
import { getProjects } from "../../actions/projectsActions";
import Project from "../../components/Projects/project";
import "./projects.css";

const Index = () => {
  const { error, projects, loading } = useSelector(
    (state) => state.projectsReducers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProjects(false));
  }, []);
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
          {loading ? (
            <div className="center-x">
              <Spinner />
            </div>
          ) : error ? (
            <Alert color="danger">{error}</Alert>
          ) : (
            projects.map((pr) => (
              <Col key={pr._id} xs="12" lg="6">
                <Project {...pr} page={true} />
              </Col>
            ))
          )}
        </Row>
      </div>
    </div>
  );
};

export default Index;
