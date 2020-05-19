import actions from '../action-list';

const initialState = {
    error: true,
    value: "",
    message: ""
};

export default (state = initialState, action)=>{
    switch (action.type) {
        case actions.USER_AVAILABILITY_DATA:return action.payload;
        case actions.RESET_USERNAME_DATA:
        case actions.RESET_REGISTER_FORM:
            return initialState;
        default:return state;
    }
};
