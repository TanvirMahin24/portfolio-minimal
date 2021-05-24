import React from "react";
import styles from "./ProjectItem.module.css";
import { Col } from "react-bootstrap";

const ProjectItem = ({ image, title, id, link }) => {
  return (
    <Col md={3} sm={6} xs={12} className="p-2">
      <div className={styles.project_card}>
        <div className={styles.box}>
          <h1 className={styles.number}>{id}</h1>
        </div>
        <div className={styles.inner_box}></div>
        <img src={image} alt="" class="pr-2" />
        <span class="d-block lead pt-4 pl-3">{title} </span>
        <div class={`text-right ${styles.project_links}`}>
          <a href={link}>
            <i class="fas fa-globe"></i>
          </a>
          {/* <a href="#"><i class="fab fa-youtube"></i></a>  */}
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
