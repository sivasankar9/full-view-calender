let initialState = [];

export default (state = initialState,action)=>{
    switch(action.type){
        case "PRIROTY_STATUS":return action.payload;
        default:return state;
    }
};