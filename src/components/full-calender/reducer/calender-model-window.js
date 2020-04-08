let initialState = false

export default (state = initialState,action)=>{
    if(action.type === "SHOW_MODEL"){
        return action.payload;

    }
    return state;
}