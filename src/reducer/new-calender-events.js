import actions from '../actions-list';

const intialstate = [];

export default (state = intialstate, action) => {
    switch (action.type) {
        case actions.FETCH_ALL_NEW_CALENDER_EVENTS:return action.payload;
        case actions.UPDATE_ALL_NEW_CALENDER_EVENTS:return state.map(item=>
            (item.ObjId === action.payload.ObjId) ?{...item, isSelected: action.payload.ischecked}
                                                  :item                              
            );
        default:return state;
    }
    
};
