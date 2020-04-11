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

export const fetchData = payload =>{
	return async dispatch => {
		let fetchedData = await fetch(payload)
					.then(resp =>resp.json())
					.then(data=>data);
	
		dispatch(({
			type: "UPDATE_FETCH_EVENTS",
			payload:fetchedData
		})
		);
	};
};

export const addEvent = payload =>dispatch => {
	dispatch(({
		type: "ADD_EVENT",
		payload
	}));
};