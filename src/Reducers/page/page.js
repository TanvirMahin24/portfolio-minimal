import { TOOGLE_CONTACT_MODAL } from "../../Constants/Types";

const initialState = { open_contact_modal: false };

const page = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOOGLE_CONTACT_MODAL:
      return { ...state, open_contact_modal: !state.open_contact_modal };
    default:
      return state;
  }
};

export default page;
