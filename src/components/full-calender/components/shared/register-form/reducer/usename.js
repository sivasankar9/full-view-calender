const initialState = {
    error: true,
    value: "",
    message: ""
};

export default (state = initialState, action)=>{
    switch (action.type) {
        case "USER_AVAILABILITY_DATA":return action.payload;
        case "RESET_USERNAME_DATA":
        case "RESET_REGISTER_FORM":
            return initialState;
        default:return state;
    }
};
