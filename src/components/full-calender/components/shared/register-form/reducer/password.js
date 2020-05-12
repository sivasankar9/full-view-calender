const initialState = {
    error: true,
    value: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "PASSWORD_AVAILABILITY": return action.payload;
        case "RESET_PASSWORD_DATA": return initialState;
        case "RESET_REGISTER_FORM": return initialState;
        default: return state;
    }
};
