import {combineReducers} from 'redux';
import calenderEvents from './calender-events'
import filterCriteria from './filter-criteria'

export default combineReducers({
    calenderEvents,
    filterCriteria
})