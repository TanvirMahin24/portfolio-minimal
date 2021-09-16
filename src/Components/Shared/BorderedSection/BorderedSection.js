import React, { useEffect, useRef, useState } from "react";
import styles from "./BorderedSection.module.css";

const BorderedSection = ({ title, children }) => {
  const [height, setHeight] = useState(0);
  const elContent = useRef(null);
  useEffect(() => {
    const heightHandeler = () => {
      setHeight(elContent.current.getBoundingClientRect().height - 170);
    };
    heightHandeler();
  }, []);

  return (
    <div className="p-sm-4 p-3">
      {title && <span className={styles.title}>{title}</span>}
      <div className={styles.wrapper}>
        <div className={styles.border_section}>
          <div className={styles.top}></div>
          <div className={styles.mid}></div>
          <div style={{ height: height }} className={styles.end}></div>
        </div>
        <div ref={elContent} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BorderedSection;
