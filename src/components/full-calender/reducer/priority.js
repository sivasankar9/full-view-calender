/* eslint-disable eqeqeq */

import actions from '../actions-list';

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.PRIROTY_STATUS: return action.payload;
        case actions.UPDATE_PRIORITY_CHECKBOX: return state.map(item =>
            (item.priorityId == action.payload.priorityId) ?
                { ...item, isSelected: action.payload.isSelected } : item);

        default: return state;
    }
};
