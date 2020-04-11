import fetchCallData from '../components/shared/fetchData';

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

export const fetchData = () =>{
	return async dispatch => {

		const payload = await fetchCallData();
		dispatch(({
			type: "UPDATE_FETCH_EVENTS",
			payload
		})
		);
	};
};

export const addEvent = (payload) => {

	return async dispatch => {
		const x = await fetch('http://localhost:9000/events',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			  },
			body: JSON.stringify(payload)	
		});

		 let flg = await x;
		 
		 if(flg.ok){
			const payload = await fetchCallData();
	
		dispatch(({
			type: "UPDATE_FETCH_EVENTS",
			payload
		})
		);
		 }
};
};