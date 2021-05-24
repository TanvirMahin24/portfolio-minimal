import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.text}>
        &copy;2021, by{"  "}
        <Link to="/" className={styles.name}>
          Noor Ajmir Tanvir
        </Link>
      </Container>
      <div className={styles.box}></div>
    </div>
  );
};

export default Footer;
