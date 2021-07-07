import React, { useEffect } from "react";
import { Container, Row, Button, Spinner, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import "./projects.css";
import Slider from "./slider";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../actions/projectsActions";

const Index = () => {
  const { error, projects, loading } = useSelector(
    (state) => state.projectsReducers
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
  return (
    <Container id="projects" fluid="lg">
      <div className="title">
        <h1 className="text-gradient">Projects</h1>
        <Link to="/projects">
          <Button outline>View All</Button>
        </Link>
      </div>
      <Row>
        {loading ? (
          <div className="center-x">
            <Spinner />
          </div>
        ) : error ? (
          <Alert color="danger">{error}</Alert>
        ) : (
          <Slider data={projects} />
        )}
      </Row>
    </Container>
  );
};

export default Index;
