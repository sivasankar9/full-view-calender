import {loginCredentials} from '../../login/service';

export const login = payload=>{
	return async dispatch=>{
		const response = await loginCredentials(payload);

		const data = await response.json();

		if (data.isLogin) {
			dispatch({
				type: "LOGIN_CREDENTIALS",
				payload: data.isLogin
			});
		}
	};
};
