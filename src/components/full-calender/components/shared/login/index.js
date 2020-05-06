import Login from './component';
import { connect } from "react-redux";
import {login} from './actions'

// const mapStateToProps = state =>  ({
//     isLogin: state.loginCalender.login
// });

export default connect(null,{login})(Login);
