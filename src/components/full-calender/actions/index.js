import { getCalenderEventsData, getEventsData, getProrityData, postEventsData, deleteEventService, postNewCreateEventsData, updateCalenderEventByIdService} from '../components/shared/service';
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

export const fetchProrityEvents = ()=>{
	return async dispatch=>{
		const payload = await getProrityData();

		dispatch({
			type: actions.PRIROTY_STATUS,
			payload
		});
	};
};

export const deleteEvent = payload=>{
	return async dispatch =>{
		const response = await deleteEventService(payload);

		dispatch({
			type: actions.UPDATE_ALL_CALENDER_EVENTS,
			payload: response
		});
	};
};

export const updateCalenderEventById = payload=>{
	return async dispatch=>{
		const response = await updateCalenderEventByIdService(payload);

		dispatch(({
			type: actions.UPDATE_ALL_CALENDER_EVENTS,
			payload: response
		})
		);
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

		const payload = await getEventsData();
		
		dispatch(({
			type: actions.UPDATE_ALL_CALENDER_EVENTS,
			payload
		})
		);
	};
};

export const fetchNewCalenderEventsData = () => {
	return async dispatch => {

		const payload = await getCalenderEventsData();

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

		if (response.ok) {
			
			const response = await getEventsData();

			dispatch(({
				type: actions.UPDATE_ALL_CALENDER_EVENTS,
				payload: response
			})
			);
		}
	};

};

export const CreateNewCalenderEvent = (payload) => {

	return async dispatch => {
		
		const response = await postNewCreateEventsData(payload);

		if (response.ok) {
			
			const response = await getCalenderEventsData();

			dispatch(({
				type: actions.FETCH_ALL_NEW_CALENDER_EVENTS,
				payload: response
			})
			);
		dispatch({
			type: actions.ALL_CALENDER_EVENTS,
			payload
		});
		}
	};

};
