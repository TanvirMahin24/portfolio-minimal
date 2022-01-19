import React from "react";
import { connect } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./ContactModal.module.css";
import { toogleContactModal } from "../../Actions/PageActions";
import ContactForm from "./ContactForm/ContactForm";

const ContactModal = ({ open, toogleContactModal }) => {
  return (
    <div className={`${styles.wrapper} ${open && styles.active}`}>
      <div className={styles.close__btn} onClick={() => toogleContactModal()}>
        <AiOutlineClose />
      </div>
      <div>
        <div className={``}>
          <div
            className={`${styles.circle} ${styles.xxlarge} ${styles.shade1}`}
          ></div>
          <div
            className={`${styles.circle} ${styles.xlarge} ${styles.shade2}`}
          ></div>
          <div
            className={`${styles.circle} ${styles.large} ${styles.shade3}`}
          ></div>
          <div
            className={`${styles.circle} ${styles.mediun} ${styles.shade4}`}
          ></div>
          <div
            className={`${styles.circle} ${styles.small} ${styles.shade5}`}
          ></div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.page.open_contact_modal,
});

export default connect(mapStateToProps, { toogleContactModal })(ContactModal);
