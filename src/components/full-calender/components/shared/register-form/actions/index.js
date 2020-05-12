import { emailAvailabilityService, registerUserDetailsService, userAvailabilityService} from '../service';

export const userAvailability = username => {
	const payload = { username };

	return async dispatch => {
		const response = await userAvailabilityService(payload);

		if (response) {
			dispatch({
				type: "USER_AVAILABILITY_DATA",
				payload: { ...response, value: username }
			});
		}
	};
};
export const userAvailabilityReset = payload => {
	return dispatch => {
		if (payload.username.length === 0) {
			dispatch({
				type: "RESET_USERNAME_DATA"
			});
		}
	};
};
export const emailAvailability = email => {
	const payload = { email };

	return async dispatch => {
		const response = await emailAvailabilityService(payload);

		if (response) {
			dispatch({
				type: "EMAIL_AVAILABILITY_DATA",
				payload: { ...response, value: email }
			});
		}
	};
};
export const emailAvailabilityReset = payload => {
	return dispatch => {
		if (payload.email.length === 0) {
			dispatch({
				type: "RESET_EMAIL_DATA"
			});
		}
	};
};
export const passwordAvailability = payload => {
	return dispatch => {
		const isError = !payload.length > 0;

		dispatch({
			type: "PASSWORD_AVAILABILITY",
			payload: { value: payload, error: isError }
		});
	};

};
export const passwordAvailabilityReset = payload => {
	return dispatch => {
		if (payload.password.length === 0) {
			dispatch({
				type: "RESET_PASSWORD_DATA"
			});
		}
	};
};	
export const registerUserDetails = payload =>{
	return async dispatch=>{
		const response = await registerUserDetailsService(payload);

		if (response.ok) {
			dispatch({
				type: "RESET_REGISTER_FORM"
			});
		}
	};
};
