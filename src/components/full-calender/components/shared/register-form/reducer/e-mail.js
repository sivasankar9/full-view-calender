const initialState = {
    error: true,
    value: "",
    message: ""
};

export default (state = initialState, action)=>{
    switch (action.type) {
        case "EMAIL_AVAILABILITY_DATA":return action.payload;
        case "RESET_EMAIL_DATA":return initialState;
        case "RESET_REGISTER_FORM":return initialState;
        default:return state;
    }
};
