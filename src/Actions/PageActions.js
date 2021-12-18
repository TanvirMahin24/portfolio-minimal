import { TOOGLE_CONTACT_MODAL } from "../Constants/Types";

export const toogleContactModal = () => (dispatch) => {
  dispatch({
    type: TOOGLE_CONTACT_MODAL,
  });
};
