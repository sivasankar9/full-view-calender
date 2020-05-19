import { emailAvailabilityService, registerUserDetailsService, userAvailabilityService} from '../service';
import actions from '../action-list';
import {isValidPassword} from './../../utilities';

export const userAvailability = username => {

	return async dispatch => {
		const response = await userAvailabilityService({ username });

			dispatch({
				type: actions.USER_AVAILABILITY_DATA,
				payload: { ...response, value: username }
			});
	};
};

export const userAvailabilityReset = payload => {
	return dispatch => {
		if (payload.username.length === 0) {
			dispatch({
				type: actions.RESET_USERNAME_DATA
			});
		}
	};
};

export const emailAvailability = email => {

	return async dispatch => {
		const response = await emailAvailabilityService({ email });

			dispatch({
				type: actions.EMAIL_AVAILABILITY_DATA,
				payload: { ...response, value: email }
			});
	};
};

export const emailAvailabilityReset = payload => {
	return dispatch => {
		if (payload.email.length === 0) {
			dispatch({
				type: actions.RESET_EMAIL_DATA
			});
		}
	};
};

export const passwordAvailability = payload => {
	return dispatch => {

		const error = isValidPassword(payload);

		dispatch({
			type: actions.PASSWORD_AVAILABILITY,
			payload: { value: payload, error }
			});
		};
	};

export const passwordAvailabilityReset = payload => {
	return dispatch => {
		if (payload.password.length === 0) {
			dispatch({
				type: actions.RESET_PASSWORD_DATA
			});
		}
	};
};
	
export const registerUserDetails = payload =>{
	return async dispatch=>{
		const response = await registerUserDetailsService(payload);

		if (response.ok) {
			dispatch({
				type: actions.RESET_REGISTER_FORM
			});
		}
	};
};
