import { getCalenderEventsData, getEventsData, getProrityData, postEventsData, postNewCreateEventsData} from '../components/shared/service';
import actions from '../actions-list';

export const allNewCalenderEvents = payload =>{
	return dispatch => {
		
		if (!payload.ischecked) {
			dispatch({
				type: actions.REMOVE_NEW_CALENDER,
				payload
			});
		} else {
			dispatch({
				type: actions.ADD_NEW_CALENDER,
				payload
			});
		}
			
		dispatch({
			type: actions.UPDATE_ALL_NEW_CALENDER_EVENTS,
			payload
		});
	
	};
}; 

export const priorityUpdateCheckbox = payload=>dispatch=>{
	if (!payload.isSelected) {
		dispatch({
			type: actions.REMOVE_PRIORITY,
			payload
		});
	} else {
		dispatch({
			type: actions.ADD_PRIORITY,
			payload
		});
	}
	dispatch({
		type: actions.UPDATE_PRIORITY_CHECKBOX,
		payload
	});
	
};

export const fetchProrityEvents = payload=>{
	return async dispatch=>{
		const response = await getProrityData();
		const payload = await response.json();

		dispatch({
			type: actions.PRIROTY_STATUS,
			payload
		});
		
	};

};

export const model = payload => dispatch => {

	dispatch(({
		type: actions.SHOW_MODEL,
		payload
	})
	);
};

export const fetchCalenderEventsData = () => {
	return async dispatch => {

		const response = await getEventsData();
		const payload = await response.json();
		
		dispatch(({
			type: actions.UPDATE_ALL_CALENDER_EVENTS,
			payload
		})
		);
	};
};

export const fetchNewCalenderEventsData = () => {
	return async dispatch => {

		const response = await getCalenderEventsData();
		const payload = await response.json();

		dispatch(({
			type: actions.FETCH_ALL_NEW_CALENDER_EVENTS,
			payload
		})
		);
	};
};

export const allCalenderEvents = (payload) => {

	return async dispatch => {
		
		const response = await postEventsData(payload);
		const data = await response.json();

		if (data.ok) {
			
			const response = await getEventsData();
			const payload = await response.json();

			dispatch(({
				type: actions.UPDATE_ALL_CALENDER_EVENTS,
				payload
			})
			);
		}
	};

};

export const CreateNewCalenderEvent = (payload) => {

	return async dispatch => {
		
		const response = await postNewCreateEventsData(payload);
		const data = await response.json();

		if (data.ok) {
			
			const response = await getCalenderEventsData();
			const payload = await response.json();


			dispatch(({
				type: actions.FETCH_ALL_NEW_CALENDER_EVENTS,
				payload
			})
			);
		dispatch({
			type: actions.ALL_CALENDER_EVENTS,
			payload
		});
		}
	};

};
