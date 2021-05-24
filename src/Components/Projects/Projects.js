import React from "react";
import { Container, Row } from "react-bootstrap";
import data from "./Data/Data";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Container>
      <Row>
        {data.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
