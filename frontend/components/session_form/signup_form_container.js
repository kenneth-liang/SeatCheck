import { connect } from "react-redux";
import { signup, receiveErrors, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

import { openModal, closeModal } from "../../actions/modal_actions";


const mSTP = ({errors}) => {
  // debugger
  return {
    errors: errors.session,
    formType: "Create Account",
  };
};

const mDTP = dispatch => {
  // debugger
  return {
    action: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
