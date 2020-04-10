export const events = payload => dispatch=>{
	dispatch({
		type: "EVENTS_SELECT",
		payload
	});
};

export const model = payload => dispatch => {
	dispatch(({
		type: "SHOW_MODEL",
		payload
	})
	);
};

export const addEvent = payload =>dispatch => {
	dispatch(({
		type: "ADD_EVENT",
		payload
	}));
};