import Login from './component';
import { connect } from "react-redux";
import { login} from './actions';

export default connect(null, {login})(Login);
