import actions from '../actions-list';

let filterdData = [];

export default (state = filterdData,action)=>{
    debugger;
    switch(action.type){
        
        case actions.REMOVE_PRIORITY:return state.filter(item=>item.priorityId !== action.payload.priorityId);
        case actions.ADD_PRIORITY:return [...state,action.payload];
        default:return state;
    }
};