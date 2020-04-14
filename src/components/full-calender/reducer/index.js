import calenderEvents from './calender-events';
import calenderModelWindow from './calender-model-window';
import {combineReducers} from 'redux';
import filterCriteria from './filter-criteria';
import newCalenderEvents from './new-calender-events';


export default combineReducers({
    calenderEvents,
    filterCriteria,
    calenderModelWindow,
    newCalenderEvents

});