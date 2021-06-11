import React from "react";
import styles from "./CertificateItem.module.css";

const CertificateItem = ({ title, provider, date, link }) => {
  return (
    <div className={styles.item}>
      <div>
        <a href={link} className={styles.provider}>
          {provider}
        </a>
        <span className={styles.time}>{date}</span>
      </div>
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default CertificateItem;
