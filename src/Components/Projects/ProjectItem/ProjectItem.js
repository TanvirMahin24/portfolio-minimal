import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import styles from "./ProjectItem.module.css";
import { Col } from "react-bootstrap";

const ProjectItem = ({ image, title, description, tags, id, link }) => {
  return (
    <Col md={12} sm={12} xs={12} className="p-2">
      <div className={styles.project__card}>
        <div className={styles.crd}>
          <span class={`d-block lead ${styles.title}`}>{title} </span>
          <div className={styles.tag__section}>
            {tags.map((tag) => (
              <div key={tag.id} className={styles.tag}>
                {tag.text}
              </div>
            ))}
          </div>
          <span class={`d-block ${styles.desc}`}>{description} </span>
          <div class={`text-right ${styles.project_links}`}>
            <a href={link}>
              <i class="fas fa-globe"></i>
            </a>
            <a href="#" className="text-light">
              <AiOutlineYoutube />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
