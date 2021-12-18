import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toogleContactModal } from "../../Actions/PageActions";
import styles from "./Contact.module.css";

const Contact = ({ toogleContactModal }) => {
  return (
    <div className="text-center">
      <h1 className={styles.title}>Get In Touch</h1>
      {/* <span className={styles.text}>Want to talk about a project?</span> */}
      <Button
        variant="primary"
        onClick={() => toogleContactModal()}
        size="lg"
        className={styles.btn}
      >
        Click Here To Contact
      </Button>
    </div>
  );
};

export default connect(null, { toogleContactModal })(Contact);
