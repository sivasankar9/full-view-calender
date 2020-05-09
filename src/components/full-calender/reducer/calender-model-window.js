import actions from '../actions-list';

let initialState = false;

export default (state = initialState, action)=>{
    switch (action.type) {
        case actions.SHOW_MODEL:return action.payload;
        default:return state;
    }
};
