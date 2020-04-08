import {combineReducers} from 'redux';
import calenderEvents from './calender-events'
import filterCriteria from './filter-criteria';
import calenderModelWindow from './calender-model-window';


export default combineReducers({
    calenderEvents,
    filterCriteria,
    calenderModelWindow
})