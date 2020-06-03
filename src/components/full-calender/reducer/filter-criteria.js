import actions from '../actions-list';

const intialstate = [];

export default (state = intialstate, action) => {
    switch (action.type) {
        case actions.FETCH_ALL_NEW_CALENDER_EVENTS:return action.payload;
        case actions.ADD_NEW_CALENDER: return [...state, action.payload];
        case actions.REMOVE_NEW_CALENDER: return state.filter(item => (item.ObjId !== action.payload.ObjId));
        default:return state;
    }
}; 
