const intialstate = [];//18

export default (state = intialstate, action) => {
    if (action.type === "ALL_CALENDER_EVENTS") {
        return action.payload;
    }
    if (action.type === "ADD_NEW_CALENDER") {
        return [...state, action.payload];
        
    };
    if (action.type === "REMOVE_NEW_CALENDER") {
        return state.filter(item => (item.ObjId !== action.payload.ObjId));
    }
    return state;
};