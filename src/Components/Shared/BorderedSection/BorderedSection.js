import React from "react";
import styles from "./BorderedSection.module.css";

const BorderedSection = ({ title, children }) => {
  return (
    <div className="p-4">
      <span className={styles.title}>{title}</span>
      <div className={styles.wrapper}>
        <div className={styles.border_section}>
          <div className={styles.top}></div>
          <div className={styles.mid}></div>
          <div className={styles.end}></div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default BorderedSection;
