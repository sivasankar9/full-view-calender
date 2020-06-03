import actions from '../actions-list';

const initialState = false;

export default (state = initialState, action)=>{
    switch (action.type) {
        case actions.LOGIN_CREDENTIALS :return action.payload;
        default:return state;
    }
};