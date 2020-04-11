let initialState = {
    events: []
};

export default (state = initialState, action) => {
    if(action.type === 'ADD_EVENT'){
        return {
            ...state,
            events:[...state.events,action.payload]
        };
    }
    if(action.type === 'UPDATE_FETCH_EVENTS'){
        return {
            ...state,
            events:[...action.payload]
        };
    }

    return state;
};