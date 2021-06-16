import React from "react";
import { Row } from "react-bootstrap";
import data from "../../stub/Projects/data";
import { BorderedSection } from "../Shared/BorderedSection";
import ProjectItem from "./ProjectItem/ProjectItem";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.wrapper}>
      <BorderedSection title="PROJECTS">
        <Row>
          {data.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </Row>
      </BorderedSection>
    </div>
  );
};

export default Projects;
