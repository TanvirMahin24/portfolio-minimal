import React from "react";
import styles from "./ExperienceItem.module.css";

const EducationItem = ({ company, time, description, link }) => {
  return (
    <div className={styles.item}>
      <div>
        <a href={link} className={styles.company}>
          {company}
        </a>
        <span className={styles.time}>{time}</span>
      </div>
      <span className={styles.description}>{description}</span>
    </div>
  );
};

export default EducationItem;
