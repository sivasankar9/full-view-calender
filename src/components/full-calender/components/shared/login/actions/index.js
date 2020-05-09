import actions from '../actions-list';
import { loginCredentials } from '../../login/service';


export const login = payload => {
	return async dispatch => {
		const response = await loginCredentials(payload);

		const data = await response.json();

		if (data.isLogin) {

			localStorage.setItem("accessToken", data.accessToken);
			
			dispatch({
				type: actions.LOGIN_CREDENTIALS,
				payload: data
			});
		}
	};
};
