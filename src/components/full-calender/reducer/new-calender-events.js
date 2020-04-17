const intialstate = [];

export default (state = intialstate, action) => {
    switch(action.type){
        case "FETCH_CALENDER_EVENTS":return action.payload;
        case "UPDATE_NEW_CALENDER":return state.map(item=>
            (item.ObjId === action.payload.ObjId) ?{...item,isSelected:action.payload.ischecked}
                                                  :item                              
            );
        default:return state;
    }
    
};