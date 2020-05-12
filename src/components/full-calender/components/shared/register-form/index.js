import {emailAvailability,registerUserDetails, emailAvailabilityReset, passwordAvailability, passwordAvailabilityReset, userAvailability, userAvailabilityReset} from './actions';
import RegisterForm from './component';
import { connect } from "react-redux";

const mapStateToProps = state =>({
    registerFormUsername: state.registerFormCalender.username,
    registerFormEmail: state.registerFormCalender.email,
    registerFormPassword: state.registerFormCalender.password
    
});

export default connect(mapStateToProps, {registerUserDetails,passwordAvailabilityReset, userAvailability, userAvailabilityReset, emailAvailabilityReset, emailAvailability, passwordAvailability})(RegisterForm);
