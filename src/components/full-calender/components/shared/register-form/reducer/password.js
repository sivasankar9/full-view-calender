import actions from '../action-list';

const initialState = {
    error: true,
    value: ""
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.PASSWORD_AVAILABILITY: return action.payload;
        case actions.RESET_PASSWORD_DATA: 
        case actions.RESET_REGISTER_FORM:
             return initialState;
        default: return state;
    }
};
