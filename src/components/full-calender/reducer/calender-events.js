import actions from '../actions-list';

let initialState = {
    events: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_ALL_CALENDER_EVENTS: return {
            ...state,
            events: [...action.payload]
        };
        
        default:return state;
    }
    
};
