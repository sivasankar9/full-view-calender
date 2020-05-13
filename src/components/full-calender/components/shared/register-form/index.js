import * as actions from './actions';
import RegisterForm from './component';
import { connect } from "react-redux";

const mapStateToProps = state =>({
    registerFormUsername: state.registerFormCalender.username,
    registerFormEmail: state.registerFormCalender.email,
    registerFormPassword: state.registerFormCalender.password
});

export default connect(mapStateToProps, {...actions})(RegisterForm);
