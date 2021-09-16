import React from "react";
import { BorderedSection } from "../Shared/BorderedSection";
import styles from "./Upwork.module.css";
import { SiUpwork } from "react-icons/si";

const Upwork = () => {
  return (
    <BorderedSection title="UPWORK">
      <span className={`d-block ${styles.upwork}`}>
        <SiUpwork />
      </span>
      <h1 className={`${styles.heading} pb-3`}>
        Feel free to contact on Upwork
      </h1>
      <a
        href="https://www.upwork.com/freelancers/~01cc30f944166fcadf"
        className={styles.contact__btn}
      >
        Contact Now
      </a>
      <div style={{ height: 45 }}></div>
    </BorderedSection>
  );
};

export default Upwork;
