import {connect} from 'react-redux';
import {fetchUser} from '../../actions/user_actions'
import UserProfile from './user'

const mSTP = state => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    }
}

export default connect(mSTP,mDTP)(UserProfile)