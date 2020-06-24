import {connect} from 'react-redux'
import {login, receiveErrors, clearErrors} from '../../actions/session_actions'
import { openModal, closeModal } from "../../actions/modal_actions";

import SessionForm from './session_form';

const mSTP = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'Sign In'
    }
}

const mDTP = dispatch => {
    return {
        action: user => dispatch(login(user)),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP,mDTP)(SessionForm)