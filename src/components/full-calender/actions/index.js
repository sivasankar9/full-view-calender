import { getCalenderEventsData, getEventsData,postEventsData,postNewCreateEventsData,getProrityData} from '../components/shared/service';
import actions from '../actions-list';

export const updateCheckbox = payload =>{
	return dispatch => {
		
		//api call update objectId with isChecked;
		if(!payload.ischecked){
			dispatch({
				type: "REMOVE_NEW_CALENDER",
				payload
			});
		} else{
			dispatch({
				type: "ADD_NEW_CALENDER",
				payload
			});
		}
			
		dispatch({
			type: "UPDATE_NEW_CALENDER",
			payload
		});
	
	};
}; 

export const priorityUpdateCheckbox = payload=>dispatch=>{
	if(!payload.isSelected){
		dispatch({
			type:actions.REMOVE_PRIORITY,
			payload
		});
	} else{
		dispatch({
			type:actions.ADD_PRIORITY,
			payload
		});
	}
	dispatch({
		type:actions.UPDATE_PRIORITY_CHECKBOX,
		payload
	});
	
};

export const fetchProrityEvents = payload=>{
	return async dispatch=>{
		const response = await getProrityData();
		const payload = await response.json();

		dispatch({
			type:actions.PRIROTY_STATUS,
			payload
		});
		
	};

};

export const model = payload => dispatch => {

	dispatch(({
		type: "SHOW_MODEL",
		payload
	})
	);
};

export const fetchData = () => {
	return async dispatch => {

		const response = await getEventsData();
		const payload = await response.json();
		
		dispatch(({
			type: "UPDATE_FETCH_EVENTS",
			payload
		})
		);
	};
};

export const fetchCalenderEvents = () => {
	return async dispatch => {

		const response = await getCalenderEventsData();
		const payload = await response.json();

		dispatch(({
			type: "FETCH_CALENDER_EVENTS",
			payload
		})
		);

		dispatch({
			type: "ALL_NEW_CALENDER_EVENTS",
			payload
		});
	};
};

export const addEvent = (payload) => {

	return async dispatch => {
		
		const response = await postEventsData(payload);
		const data = await response.json();

		if (data.ok) {
			
			const response = await getEventsData();
			const payload = await response.json();

			dispatch(({
				type: "UPDATE_FETCH_EVENTS",
				payload
			})
			);
		}
	};

};

export const addCreateEvent = (payload) => {

	return async dispatch => {
		
		const response = await postNewCreateEventsData(payload);
		const data = await response.json();
		if (data.ok) {
			
			const response = await getCalenderEventsData();
			const payload = await response.json();


			dispatch(({
				type: "FETCH_CALENDER_EVENTS",
				payload
			})
			);
		dispatch({
			type: "ALL_CALENDER_EVENTS",
			payload
		});
		}
	};

};