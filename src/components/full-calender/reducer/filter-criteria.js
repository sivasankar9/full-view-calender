const intialstate = {
    bill: true,
    event: true
}

export default (state = intialstate, action) => {
    if (action.type === "EVENTS_SELECT") {
        return {
            ...state,
            [action.payload.value]: !state[action.payload.value]
        }
    }

    return state;
}