import React from "react";
import { connect } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./ContactModal.module.css";
import { toogleContactModal } from "../../Actions/PageActions";

const ContactModal = ({ open, toogleContactModal }) => {
  return (
    <div className={`${styles.wrapper} ${open && styles.active}`}>
      <div className={styles.close__btn} onClick={() => toogleContactModal()}>
        <AiOutlineClose />
      </div>
      MODAL
    </div>
  );
};
const mapStateToProps = (state) => ({
  open: state.page.open_contact_modal,
});

export default connect(mapStateToProps, { toogleContactModal })(ContactModal);
