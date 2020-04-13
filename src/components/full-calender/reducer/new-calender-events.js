const intialstate = []

export default (state = intialstate, action) => {
    if (action.type === "FETCH_CALENDER_EVENTS") {
        return action.payload
    }

    return state;
};