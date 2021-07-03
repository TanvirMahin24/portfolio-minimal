import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { VscGithubAlt } from "react-icons/vsc";
import { SiNpm } from "react-icons/si";
import styles from "./ProjectItem.module.css";
import WinboxReact from "winbox-react";
import { Col } from "react-bootstrap";
import { useState } from "react";

const ProjectItem = ({ npm, github, title, description, tags, id, link }) => {
  const [modal, setModal] = useState(false);
  return (
    <Col md={12} sm={12} xs={12} className="p-2">
      {modal && <WinboxReact onClose={() => setModal(false)} />}
      <div className={styles.project__card}>
        <div className={styles.crd}>
          <span className={`d-block lead ${styles.title}`}>{title} </span>
          <div className={styles.tag__section}>
            {tags.map((tag) => (
              <div key={tag.id} className={styles.tag}>
                {tag.text}
              </div>
            ))}
          </div>
          <span className={`d-block ${styles.desc}`}>{description} </span>
          {/* <div className="">
            <button className={styles.btn__read} onClick={() => setModal(true)}>
              Read{" "}
            </button>
          </div> */}
          <div className={`text-right ${styles.project_links}`}>
            {link && (
              <a href={link} className={styles.icon}>
                <BsBoxArrowUpRight />
              </a>
            )}
            {github && (
              <a href={github} className={styles.icon}>
                <VscGithubAlt />
              </a>
            )}

            {npm && (
              <a href={link} className={styles.icon}>
                <SiNpm />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectItem;
